import Image from "next/image";
import Link from "next/link";
import { INSTALL_URL } from "../../lib/kargaKodu";

/** Karga Kodu sayfalarının üst şeridi: logo + uygulamayı indir. */
export default function KodHeader() {
  return (
    <header className="w-full max-w-3xl flex items-center justify-between py-4 print:hidden">
      <Link href="/k" aria-label="Karga Kodu" className="relative w-9 h-9">
        <Image src="/karga.webp" alt="Karga" fill sizes="36px" className="object-contain" />
      </Link>
      <a
        href={`${INSTALL_URL}&utm_campaign=header`}
        className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
      >
        Uygulamayı indir
      </a>
    </header>
  );
}
