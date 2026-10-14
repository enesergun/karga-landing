// Karga Kodu: uygulamadan paylaşılan soruları Cloud Function üzerinden okur.
// Firestore'a doğrudan erişim yok; süre/iptal kontrolü fonksiyonda yapılır.

const SHARE_API = "https://europe-west1-soru-cek.cloudfunctions.net/getShare";

/** Karga Kodu sayfalarındaki tüm indirme butonları; campaign her butonda ayrıca eklenir. */
export const INSTALL_URL = "https://yanlisdefteri.com/install?utm_source=karga_kodu&utm_medium=web";

// Uygulamadaki alfabe ile aynı: 0/O, 1/I/L yok.
const CODE_RE = /^[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/;

// Link önizleme botları (WhatsApp, Telegram vb.) görüntülenme olarak sayılmasın.
const BOT_RE = /bot|crawl|spider|preview|facebookexternalhit|whatsapp|telegram|slack|discord|twitter|linkedin|skype/i;

export interface SharedQuestion {
  imageUrl: string | null;
  lesson: string;
  topic: string;
  reasonTag: string | null;
  note?: string;
  solutionUrls?: string[];
}

export interface Share {
  code: string;
  questionCount: number;
  createdAt: number;
  expiresAt: number;
  questions: SharedQuestion[];
}

export type ShareError = "not_found" | "expired" | "revoked" | "unavailable";

export type ShareResult = { ok: true; share: Share } | { ok: false; error: ShareError };

/** "k7f-32q" → "K7F32Q"; geçersizse null. */
export function normalizeCode(raw: string | undefined | null): string | null {
  if (!raw) return null;
  const code = raw.toUpperCase().replace(/[^A-Z0-9]/g, "");
  return CODE_RE.test(code) ? code : null;
}

/** "K7F32Q" → "K7F-32Q" */
export function formatCode(code: string): string {
  return `${code.slice(0, 3)}-${code.slice(3)}`;
}

export function isBot(userAgent: string | null): boolean {
  return !userAgent || BOT_RE.test(userAgent);
}

export async function fetchShare(code: string, track: boolean): Promise<ShareResult> {
  try {
    const res = await fetch(`${SHARE_API}?code=${code}${track ? "" : "&track=0"}`, {
      cache: "no-store",
    });
    if (res.ok) return { ok: true, share: (await res.json()) as Share };
    if (res.status === 404) {
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (body.error === "expired" || body.error === "revoked") return { ok: false, error: body.error };
      return { ok: false, error: "not_found" };
    }
    return { ok: false, error: "unavailable" };
  } catch {
    return { ok: false, error: "unavailable" };
  }
}
