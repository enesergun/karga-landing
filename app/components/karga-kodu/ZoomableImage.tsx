"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  /** İlk ekrandaki görsel: hemen ve yüksek öncelikle indirilir. */
  priority?: boolean;
  loading?: "eager" | "lazy";
  className?: string;
};

/** Görsele tıklanınca site içinde tam ekran büyütür; ESC, arka plan veya ✕ ile kapanır. */
export default function ZoomableImage({ src, alt, priority = false, loading = "lazy", className }: Props) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Görsel hydration'dan önce yüklendiyse onLoad kaçmış olur.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        // Yüklenene kadar yer tutar: boyutsuz görseller 0px yükseklikte kalınca tarayıcı
        // tüm lazy görselleri "ekranda" sanıp aynı anda indiriyor, ilk ekrandakiler yavaşlıyordu.
        className={`block w-full cursor-zoom-in ${loaded ? "" : "min-h-[40vh] rounded-2xl bg-border/40 animate-pulse"}`}
        aria-label={`${alt} büyüt`}
      >
        {/* Görseller Cloud Function proxy'sinden gelir; next/image optimizasyonu kullanılmaz. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : loading}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={className}
        />
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-8 cursor-zoom-out print:hidden"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Kapat"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 text-white text-2xl leading-none hover:bg-white/25 transition-colors"
          >
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="max-w-full max-h-full object-contain rounded-xl" />
        </div>
      ) : null}
    </>
  );
}
