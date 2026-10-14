"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { INSTALL_URL } from "../../lib/kargaKodu";

const DISMISS_KEY = "karga_kodu_cta_dismissed";

/** Alttan açılan "uygulamayı indir" kartı. Kapatılırsa oturum boyunca tekrar çıkmaz. */
export default function InstallCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      // Gizli sekme vb.: her seferinde göster.
    }
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  };

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-[max(12px,env(safe-area-inset-bottom))] transition-transform duration-500 ease-out print:hidden ${
        visible ? "translate-y-0" : "translate-y-[calc(100%+2rem)]"
      }`}
    >
      <div className="relative w-full max-w-xl flex items-center gap-4 rounded-3xl border border-border/80 bg-surface/95 backdrop-blur-md p-4 pr-5 shadow-[0_-8px_32px_rgba(15,23,42,0.12)]">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Kapat"
          tabIndex={visible ? 0 : -1}
          className="absolute -top-3 right-4 w-8 h-8 rounded-full bg-surface border border-border text-text-secondary text-sm shadow-sm hover:text-text-main"
        >
          ✕
        </button>
        <span className="relative w-12 h-12 shrink-0 rounded-2xl bg-primary-light">
          <Image src="/karga.webp" alt="" fill sizes="48px" className="object-contain p-1.5" />
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-extrabold text-text-main leading-tight">Yanlışlarını kaybetme</p>
          <p className="text-sm text-text-secondary leading-snug mt-0.5">
            Fotoğrafla, Karga tekrar zamanı hatırlatsın.
          </p>
        </div>
        <a
          href={`${INSTALL_URL}&utm_campaign=bottom_cta`}
          tabIndex={visible ? 0 : -1}
          className="shrink-0 h-11 px-5 rounded-full bg-primary text-white text-sm font-bold flex items-center shadow-[0_8px_16px_rgba(99,102,241,0.25)] hover:bg-primary/90 active:scale-95 transition-all"
        >
          İndir
        </a>
      </div>
    </div>
  );
}
