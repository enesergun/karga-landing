"use client";

/** Öğretmen soruları kâğıda basmak isterse. */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="h-10 px-4 rounded-full border border-border bg-surface text-sm font-semibold text-text-main hover:border-primary/40 hover:text-primary transition-colors print:hidden"
    >
      Yazdır
    </button>
  );
}
