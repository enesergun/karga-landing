import type { Metadata } from "next";
import { preconnect } from "react-dom";
import InstallCta from "../components/karga-kodu/InstallCta";
import { SHARE_ORIGIN } from "../lib/kargaKodu";

// Paylaşılan sorular öğrencilere ait: hiçbir /k sayfası arama motorlarında görünmesin.
export const metadata: Metadata = {
  title: "Karga Kodu | Paylaşılan Sorular",
  description: "Karga uygulamasından paylaşılan soruları kodla görüntüle.",
  robots: { index: false, follow: false },
};

export default function KargaKoduLayout({ children }: { children: React.ReactNode }) {
  // Kod giriş sayfasında da açılır: soru görselleri gelirken DNS/TLS hazır olsun.
  preconnect(SHARE_ORIGIN);
  return (
    // pb-40: alttaki indirme kartı son içeriği örtmesin.
    <main className="w-full min-h-[100dvh] flex flex-col items-center bg-background text-text-main px-4 sm:px-6 pb-40 print:pb-0">
      {children}
      <InstallCta />
    </main>
  );
}
