import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karga | Dijital Soru ve Yanlış Defteri",
  description: "Çözemediğin ve takıldığın soruları fotoğrafla, kütüphanene ekle ve çalışma programına göre tekrar hatırla. Karga ile sınav hazırlığında başarıyı yakala!",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://karga.app",
  },
  openGraph: {
    title: "Karga | Dijital Soru ve Yanlış Defteri",
    description: "Çözemediğin ve takıldığın soruları fotoğrafla, kütüphanene ekle ve çalışma programına göre tekrar hatırla. Karga ile sınav hazırlığında başarıyı yakala!",
    url: "https://karga.app",
    siteName: "Karga",
    images: [
      {
        url: "https://karga.app/karga.png",
        width: 512,
        height: 512,
        alt: "Karga Logo - Dijital Soru ve Yanlış Defteri",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karga | Dijital Soru ve Yanlış Defteri",
    description: "Çözemediğin ve takıldığın soruları fotoğrafla, kütüphanene ekle ve çalışma programına göre tekrar hatırla. Karga ile sınav hazırlığında başarıyı yakala!",
    images: ["https://karga.app/karga.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Karga",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "EducationalApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "TRY",
  },
  "description": "Takıldığın soruları fotoğrafla, kütüphanene ekle ve çalışma programına uygun zamanlarda tekrar hatırlat. Karga ile başarı artık tamamen senin elinde!",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "120",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

