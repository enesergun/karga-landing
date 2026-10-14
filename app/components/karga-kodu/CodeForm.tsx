/** JS gerektirmeyen kod giriş formu: /k?code=... → /k/{code} yönlendirmesi. */
export default function CodeForm({ defaultValue = "", autoFocus = false }: { defaultValue?: string; autoFocus?: boolean }) {
  return (
    <form action="/k" method="get" className="w-full flex flex-col sm:flex-row gap-3">
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
