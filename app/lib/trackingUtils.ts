/**
 * Reklam kanalı tracking utility fonksiyonları.
 *
 * /install sayfasına query string olarak eklenen UTM ve özel parametreleri
 * parse eder, GA4'e event gönderir ve store URL'lerine tracking bilgisi ekler.
 *
 * Örnek kullanım URL'i:
 * /install?utm_source=meta&utm_medium=paid_social&utm_campaign=yaz2025&channel=instagram&ad_id=123
 */

// --- Desteklenen parametre listeleri ---

const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

const CUSTOM_PARAMS = [
  "channel",
  "campaign_id",
  "ad_id",
  "creative_id",
] as const;

const ALL_TRACKING_PARAMS = [...UTM_PARAMS, ...CUSTOM_PARAMS] as const;

export type TrackingParams = Partial<
  Record<(typeof ALL_TRACKING_PARAMS)[number], string>
>;

// --- Parse ---

/**
 * Mevcut URL'den tüm tracking parametrelerini (UTM + özel) çıkarır.
 * Boş değerleri filtreler.
 */
export function parseTrackingParams(): TrackingParams {
  if (typeof window === "undefined") return {};

  const searchParams = new URLSearchParams(window.location.search);
  const params: TrackingParams = {};

  for (const key of ALL_TRACKING_PARAMS) {
    const value = searchParams.get(key);
    if (value) {
      params[key] = value;
    }
  }

  return params;
}

/**
 * Tracking parametrelerinin en az birinin mevcut olup olmadığını kontrol eder.
 */
export function hasTrackingParams(params: TrackingParams): boolean {
  return Object.keys(params).length > 0;
}

// --- Store URL Builder ---

/**
 * Google Play URL'ine `referrer` parametresi ekler.
 * Google Play, referrer parametresindeki UTM değerlerini Google Play Console'da gösterir.
 *
 * Çıktı örneği:
 * https://play.google.com/store/apps/details?id=com.ergunenes.sorucek&referrer=utm_source%3Dmeta%26utm_campaign%3Dyaz2025
 */
export function buildGooglePlayUrl(
  baseUrl: string,
  params: TrackingParams
): string {
  // Sadece UTM parametrelerini referrer'a ekle (Google Play bunları tanır)
  const utmEntries = UTM_PARAMS.map((key) => [key, params[key]])
    .filter(([, value]) => !!value) as [string, string][];

  if (utmEntries.length === 0) return baseUrl;

  // referrer değeri kendi içinde key=value&key=value formatında, sonra encode edilir
  const referrerValue = utmEntries
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const url = new URL(baseUrl);
  url.searchParams.set("referrer", referrerValue);

  return url.toString();
}

/**
 * App Store URL'ine campaign token (ct) parametresi ekler.
 * App Store Connect Analytics'te bu kampanya adı ile filtreleme yapılabilir.
 *
 * Çıktı örneği:
 * https://apps.apple.com/tr/app/karga-.../id6770515165?ct=meta_yaz2025&pt=karga
 */
export function buildAppStoreUrl(
  baseUrl: string,
  params: TrackingParams
): string {
  const campaignParts: string[] = [];

  if (params.utm_source) campaignParts.push(params.utm_source);
  if (params.utm_campaign) campaignParts.push(params.utm_campaign);

  if (campaignParts.length === 0) return baseUrl;

  const url = new URL(baseUrl);
  // ct = campaign token (App Store Connect Analytics'te görünür)
  url.searchParams.set("ct", campaignParts.join("_"));
  // pt = provider token (opsiyonel, App Store Connect'teki provider ID)
  url.searchParams.set("pt", "karga");

  return url.toString();
}

// --- GA4 Event Gönderme ---

/**
 * GA4'e custom event gönderir.
 * gtag henüz yüklenmediyse sessizce başarısız olur.
 */
export function sendGA4Event(
  eventName: string,
  eventParams: Record<string, string | undefined>
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  // undefined değerleri temizle
  const cleanParams: Record<string, string> = {};
  for (const [key, value] of Object.entries(eventParams)) {
    if (value) {
      cleanParams[key] = value;
    }
  }

  window.gtag("event", eventName, cleanParams);
}

/**
 * Install sayfası için tam tracking akışını çalıştırır:
 * 1. Query parametrelerini parse et
 * 2. GA4'e install_redirect event'i gönder
 * 3. Store URL'lerini tracking bilgisiyle oluştur
 */
export function processInstallTracking(deviceType: "ios" | "android" | "desktop") {
  const params = parseTrackingParams();

  const BASE_IOS_URL =
    "https://apps.apple.com/tr/app/karga-sorular%C4%B1-asla-unutma/id6770515165";
  const BASE_ANDROID_URL =
    "https://play.google.com/store/apps/details?id=com.ergunenes.sorucek";

  // GA4 event gönder
  if (hasTrackingParams(params)) {
    sendGA4Event("install_redirect", {
      ...params,
      device_type: deviceType,
      redirect_target:
        deviceType === "ios"
          ? "appstore"
          : deviceType === "android"
            ? "google_play"
            : "desktop_qr",
    });
  } else {
    // Parametresiz gelen organik trafiği de kaydet
    sendGA4Event("install_redirect", {
      device_type: deviceType,
      redirect_target:
        deviceType === "ios"
          ? "appstore"
          : deviceType === "android"
            ? "google_play"
            : "desktop_qr",
      utm_source: "direct",
    });
  }

  // Store URL'lerini oluştur
  const iosUrl = hasTrackingParams(params)
    ? buildAppStoreUrl(BASE_IOS_URL, params)
    : BASE_IOS_URL;

  const androidUrl = hasTrackingParams(params)
    ? buildGooglePlayUrl(BASE_ANDROID_URL, params)
    : BASE_ANDROID_URL;

  return { iosUrl, androidUrl, params };
}
