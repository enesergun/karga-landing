import Image from "next/image";
import Link from "next/link";

/** Karga Kodu sayfalarının üst şeridi. */
export default function KodHeader() {
  return (
    <header className="w-full max-w-3xl flex items-center justify-between py-4 print:hidden">
      <Link href="/k" className="flex items-center gap-2.5 group">
        <span className="relative w-9 h-9">
          <Image src="/karga.webp" alt="Karga" fill sizes="36px" className="object-contain" />
        </span>
        <span className="text-lg font-extrabold text-text-main group-hover:text-primary transition-colors">
          Karga Kodu
        </span>
      </Link>
      <Link
        href="/install?utm_source=karga_kodu&utm_medium=web"
        className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
      >
        Uygulamayı indir
      </Link>
    </header>
  );
}
