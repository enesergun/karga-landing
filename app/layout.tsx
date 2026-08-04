import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://kargasoru.netlify.app"),
  title: "Karga | Dijital Soru ve Yanlış Defteri",
  description: "Çözemediğin ve takıldığın soruları fotoğrafla, kütüphanene ekle ve çalışma programına göre tekrar hatırla. Karga ile sınav hazırlığında başarıyı yakala!",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://kargasoru.netlify.app",
  },
  openGraph: {
    title: "Karga | Dijital Soru ve Yanlış Defteri",
    description: "Çözemediğin ve takıldığın soruları fotoğrafla, kütüphanene ekle ve çalışma programına göre tekrar hatırla. Karga ile sınav hazırlığında başarıyı yakala!",
    url: "https://kargasoru.netlify.app",
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
  twitter: {
    card: "summary_large_image",
    title: "Karga | Dijital Soru ve Yanlış Defteri",
    description: "Çözemediğin ve takıldığın soruları fotoğrafla, kütüphanene ekle ve çalışma programına göre tekrar hatırla. Karga ile sınav hazırlığında başarıyı yakala!",
    images: ["https://kargasoru.netlify.app/karga.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://kargasoru.netlify.app/#application",
      "name": "Karga",
      "operatingSystem": "Android, iOS",
      "applicationCategory": "EducationalApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "TRY",
      },
      "description": "KPSS, YKS ve LGS sınavlarına hazırlanan öğrencilerin, yanlış yaptıkları ya da boş bıraktıkları soruların fotoğraflarını çekerek telefonda dijital bir yanlış defteri (hata soru bankası) oluşturmalarını sağlayan eğitim uygulamasıdır.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "154",
      },
      "screenshot": [
        "https://kargasoru.netlify.app/library.webp",
        "https://kargasoru.netlify.app/add.webp",
        "https://kargasoru.netlify.app/reminder.webp",
      ],
      "downloadUrl": "https://apps.apple.com/tr/app/karga-sorular%C4%B1-asla-unutma/id6770515165",
      "sameAs": [
        "https://play.google.com/store/apps/details?id=com.ergunenes.sorucek",
        "https://apps.apple.com/tr/app/karga-sorular%C4%B1-asla-unutma/id6770515165",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://kargasoru.netlify.app/#organization",
      "name": "Karga App",
      "url": "https://kargasoru.netlify.app",
      "logo": "https://kargasoru.netlify.app/karga.png",
      "sameAs": [
        "https://www.instagram.com/kargaapp/",
        "https://www.linkedin.com/in/enesergun/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://kargasoru.netlify.app/#website",
      "url": "https://kargasoru.netlify.app",
      "name": "Karga - Dijital Soru ve Yanlış Defteri",
      "publisher": {
        "@id": "https://kargasoru.netlify.app/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://kargasoru.netlify.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Karga Nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Karga; YKS, KPSS ve LGS gibi merkezi sınavlara hazırlanan öğrencilerin, denemelerde veya test kitaplarında çözemedikleri ya da boş bıraktıkları soruları fotoğraflayarak mobil cihazlarında dijital bir yanlış defteri ve dijital soru bankası oluşturmalarını sağlayan bir eğitim uygulamasıdır."
          }
        },
        {
          "@type": "Question",
          "name": "Karga Hangi Sorunu Çözer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Öğrencilerin fiziki test kitaplarını kesip yapıştırma zahmetini tamamen ortadan kaldırır. Yanlış yapılan veya boş bırakılan soruların kaybolmasını önler, ders ve konu bazlı kategorizasyon sağlar ve bilimsel tekrar aralıklarıyla (1, 3, 7 gün vb.) soruları hatırlatarak öğrenimi kalıcılaştırır."
          }
        },
        {
          "@type": "Question",
          "name": "Karga Temel Özellikleri Nelerdir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fotoğraflı soru ekleme, detaylı soru etiketleme, akıllı hatırlatıcı programı, internetsiz (çevrimdışı) erişim ve mobil odaklı pratik kullanım sunar."
          }
        },
        {
          "@type": "Question",
          "name": "Karga Hangi Cihazlarda Kullanılabilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Karga mobil uygulaması; iOS (iPhone) platformu için App Store ve Android platformu için Google Play Store üzerinden ücretsiz indirilebilir."
          }
        }
      ]
    }
  ]
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Z03NDCKETE"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z03NDCKETE');
        `}
      </Script>
    </html>
  );
}

