import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karga'yı İndir | Dijital Soru ve Yanlış Defteri Uygulaması",
  description: "Karga uygulamasını App Store veya Google Play üzerinden indir. Yanlış yaptığın ve çözemediğin soruları fotoğrafla, kütüphaneni oluştur ve akıllı hatırlatıcıyla tekrar et.",
  alternates: {
    canonical: "https://kargasoru.netlify.app/install",
  },
  openGraph: {
    title: "Karga'yı İndir | Dijital Soru ve Yanlış Defteri",
    description: "Karga mobil uygulamasını indir. Yanlış sorularını telefonda arşivle ve unutma!",
    url: "https://kargasoru.netlify.app/install",
    siteName: "Karga",
    images: [
      {
        url: "https://kargasoru.netlify.app/karga.png",
        width: 512,
        height: 512,
        alt: "Karga Logo - Dijital Soru ve Yanlış Defteri",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default function InstallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
