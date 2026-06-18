"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function InstallRedirect() {
  const [deviceType, setDeviceType] = useState<"ios" | "android" | "desktop" | null>(null);
  const [showFallback, setShowFallback] = useState(false);
  const [qrUrl, setQrUrl] = useState<string | null>(null);

  const iosUrl = "https://apps.apple.com/tr/app/karga-sorular%C4%B1-asla-unutma/id6770515165";
  const androidUrl = "https://play.google.com/store/apps/details?id=com.ergunenes.sorucek";

  useEffect(() => {
    const origin = window.location.origin;
    setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(origin + "/install")}&color=0f172a&bgcolor=ffffff`);

    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    
    let detected: "ios" | "android" | "desktop" = "desktop";

    if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
      detected = "ios";
    } else if (/android/i.test(ua)) {
      detected = "android";
    }

    setDeviceType(detected);

    // Automatic redirect for mobile devices
    if (detected === "ios") {
      window.location.replace(iosUrl);
    } else if (detected === "android") {
      window.location.replace(androidUrl);
    }

    // Show fallback controls after 1.5 seconds if redirect gets stuck or if on desktop
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Show beautiful loading state for mobile redirect
  if (deviceType === "ios" || deviceType === "android") {
    return (
      <main className="w-full min-h-[100dvh] flex flex-col items-center justify-center bg-background text-text-main p-6 relative overflow-hidden">
        {/* Background Blur */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary-light rounded-full blur-[100px] opacity-70 -z-10"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#f3e8ff] rounded-full blur-[100px] opacity-70 -z-10"></div>

        <div className="flex flex-col items-center max-w-sm w-full text-center z-10">
          {/* Animated Spinner Wrapper */}
          <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/10 animate-pulse"></div>
            {/* Spinning gradient ring */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"></div>
            {/* Inner Logo */}
            <div className="relative w-10 h-10">
              <Image
                src="/karga.webp"
                alt="Karga Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold text-text-main mb-3 tracking-tight">
            Mağazaya Yönlendiriliyorsunuz...
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed mb-8">
            Karga uygulamasını indirmek için {deviceType === "ios" ? "App Store'a" : "Google Play Store'a"} aktarılıyorsunuz.
          </p>

          {/* Fallback button shows up after 1.5s */}
          <div className={`transition-all duration-500 ease-out ${showFallback ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
            <p className="text-xs text-text-muted mb-3">
              Yönlendirme gerçekleşmedi mi?
            </p>
            <a
              href={deviceType === "ios" ? iosUrl : androidUrl}
              className="inline-flex items-center justify-center bg-primary text-surface px-8 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-[0_8px_16px_rgba(99,102,241,0.25)] hover:shadow-[0_12px_24px_rgba(99,102,241,0.35)] active:scale-95 transition-all duration-300"
            >
              Manuel Olarak Git
            </a>
          </div>
        </div>
      </main>
    );
  }

  // Render beautiful portal page for desktop users
  return (
    <main className="w-full min-h-[100dvh] flex flex-col items-center justify-center bg-background text-text-main p-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-25%] left-[-15%] w-[70%] h-[70%] bg-primary-light rounded-full blur-[120px] opacity-75 -z-10"></div>
      <div className="absolute bottom-[-25%] right-[-15%] w-[70%] h-[70%] bg-[#f3e8ff] rounded-full blur-[120px] opacity-75 -z-10"></div>

      <div className="max-w-md w-full bg-surface/80 backdrop-blur-lg border border-border/80 rounded-[2.5rem] p-8 sm:p-10 text-center shadow-xl z-10 transition-all duration-300">
        
        {/* App Logo & Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-16 h-16 mb-4">
            <Image
              src="/karga.webp"
              alt="Karga Logo"
              fill
              className="object-contain drop-shadow-md"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-main tracking-tight">
            Karga'yı Hemen İndir
          </h1>
          <p className="text-sm text-text-secondary mt-2 leading-relaxed">
            Sınav hazırlığında yanlış yaptığın soruları fotoğrafla, kütüphaneni oluştur ve asla unutma!
          </p>
        </div>

        {/* QR Code Container */}
        <div className="bg-background rounded-3xl p-6 border border-border/60 shadow-inner inline-flex flex-col items-center justify-center mb-8 w-full">
          <div className="relative w-36 h-36 bg-white p-3 rounded-2xl border border-border/40 shadow-sm mb-4">
            {qrUrl ? (
              <img
                src={qrUrl}
                alt="Karga İndirme QR Kodu"
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full bg-border/20 rounded animate-pulse" />
            )}
          </div>
          <span className="text-xs sm:text-sm font-bold text-text-main">
            Telefonunun Kamerasıyla Tara
          </span>
          <span className="text-[11px] sm:text-xs text-text-secondary mt-1 leading-relaxed max-w-[220px]">
            QR kodunu taratarak Karga mobil uygulamasını doğrudan telefonuna indirebilirsin.
          </span>
        </div>

        {/* Manual Download Links (Fallback buttons) */}
        <div className="flex flex-col gap-3.5 w-full">
          <a
            id="install-appstore-link"
            href={iosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-primary text-white py-3.5 px-6 rounded-full font-bold text-sm sm:text-base shadow-[0_8px_16px_rgba(99,102,241,0.2)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(99,102,241,0.3)] transition-all duration-300"
          >
            <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            App Store'dan İndir
          </a>
          <a
            id="install-googleplay-link"
            href={androidUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-surface text-text-main border border-border py-3.5 px-6 rounded-full font-bold text-sm sm:text-base hover:border-primary hover:text-primary transition-all duration-300 shadow-sm"
          >
            <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            Google Play'den İndir
          </a>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <a href="/" className="text-xs text-text-muted hover:text-primary transition-colors duration-300">
            ← Ana Sayfaya Dön
          </a>
        </div>
      </div>
    </main>
  );
}
