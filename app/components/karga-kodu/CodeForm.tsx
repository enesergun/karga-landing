"use client";

import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { normalizeCode } from "../../lib/kargaKodu";

/**
 * Kod giriş formu. JS varken doğrudan /k/{code} adresine gider; sunucu
 * yönlendirmesi olmadığı için Netlify'ın eklediği ?code= adreste kalmaz.
 * JS yoksa /k?code=... → /k/{code} yönlendirmesi yedek olarak çalışır.
 */
export default function CodeForm({ defaultValue = "", autoFocus = false }: { defaultValue?: string; autoFocus?: boolean }) {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const raw = String(new FormData(e.currentTarget).get("code") ?? "").trim();
    const code = normalizeCode(raw);
    router.push(code ? `/k/${code}` : `/k?code=${encodeURIComponent(raw)}`);
  }

  return (
    <form action="/k" method="get" onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3">
      <label htmlFor="karga-kodu" className="sr-only">
        Karga Kodu
      </label>
      <input
        id="karga-kodu"
        name="code"
        defaultValue={defaultValue}
        autoFocus={autoFocus}
        required
        autoComplete="off"
        autoCapitalize="characters"
        spellCheck={false}
        maxLength={8}
        placeholder="K7F-32Q"
        className="flex-1 min-w-0 h-14 px-5 rounded-2xl border-2 border-border bg-surface text-2xl font-extrabold tracking-[0.2em] uppercase text-text-main placeholder:text-text-muted/60 focus:outline-none focus:border-primary transition-colors"
      />
      <button
        type="submit"
        className="h-14 px-8 rounded-2xl bg-primary text-white font-bold text-base shadow-[0_8px_16px_rgba(99,102,241,0.25)] hover:bg-primary/90 active:scale-95 transition-all"
      >
        Soruları aç
      </button>
    </form>
  );
}
