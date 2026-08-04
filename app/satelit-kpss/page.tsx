import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "KPSS Yanlış Defteri | Telefondan Hata Soru Bankası - Karga",
  description: "KPSS hazırlığında fark yaratın! Çözemediğiniz Genel Yetenek, Genel Kültür ve ÖABT sorularının fotoğraflarını çekerek telefondan yanlış defteri oluşturun.",
  alternates: {
    canonical: "https://kargasoru.netlify.app/satelit-kpss",
  },
  openGraph: {
    title: "KPSS Yanlış Defteri | Telefondan Hata Soru Bankası - Karga",
    description: "KPSS sınavlarında yaptığınız hatalardan ders çıkarın. Soruları fotoğraflayın, kendi hata soru bankanızı oluşturun ve akıllı tekrarlarla başarıya ulaşın.",
    url: "https://kargasoru.netlify.app/satelit-kpss",
    siteName: "Karga KPSS",
    images: [
      {
        url: "https://kargasoru.netlify.app/karga.png",
        width: 512,
        height: 512,
        alt: "Karga Logo - KPSS Yanlış Defteri",
      },
    ],
    locale: "tr_TR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "KPSS Yanlış Defteri | Telefondan Hata Soru Bankası - Karga",
    description: "KPSS hazırlığında yanınızdaki dijital asistan. Hatalı soruları fotoğrafla, kütüphaneni oluştur ve akıllı bildirimlerle tekrar et.",
    images: ["https://kargasoru.netlify.app/karga.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SoftwareApplication", "EducationalApplication"],
      "@id": "https://kargasoru.netlify.app/satelit-kpss/#application",
      "name": "Karga KPSS Yanlış Defteri",
      "operatingSystem": "Android, iOS",
      "applicationCategory": "EducationalApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "TRY",
      },
      "description": "KPSS (Genel Yetenek, Genel Kültür, Eğitim Bilimleri, ÖABT) sınavlarına hazırlanan öğrencilerin testlerde yanlış yaptıkları ya da boş bıraktıkları soruların fotoğraflarını çekerek telefonda dijital bir yanlış defteri ve hata soru bankası oluşturmalarını sağlayan eğitim yazılımıdır.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "154",
      },
      "downloadUrl": "https://apps.apple.com/tr/app/karga-sorular%C4%B1-asla-unutma/id6770515165",
      "sameAs": [
        "https://play.google.com/store/apps/details?id=com.ergunenes.sorucek",
        "https://apps.apple.com/tr/app/karga-sorular%C4%B1-asla-unutma/id6770515165",
      ],
    },
    {
      "@type": "BlogPosting",
      "@id": "https://kargasoru.netlify.app/satelit-kpss/#article",
      "headline": "KPSS Yanlış Defteri | Telefondan Hata Soru Bankası",
      "description": "KPSS hazırlığında fark yaratın! Çözemediğiniz Genel Yetenek, Genel Kültür ve ÖABT sorularının fotoğraflarını çekerek telefondan yanlış defteri oluşturun.",
      "datePublished": "2026-01-15T08:00:00+03:00",
      "dateModified": "2026-08-04T10:00:00+03:00",
      "author": {
        "@type": "Organization",
        "name": "Karga App",
        "url": "https://kargasoru.netlify.app"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Karga App",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kargasoru.netlify.app/karga.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://kargasoru.netlify.app/satelit-kpss"
      }
    }
  ]
};

const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent("https://kpssyanlisdefteri.com/install")}&color=0f172a&bgcolor=ffffff`;

export default function KpssSatellitePage() {
  const iosUrl = "https://apps.apple.com/tr/app/karga-sorular%C4%B1-asla-unutma/id6770515165";
  const androidUrl = "https://play.google.com/store/apps/details?id=com.ergunenes.sorucek";

  return (
    <main className="w-full min-h-[100dvh] flex flex-col bg-background text-text-main relative overflow-x-hidden scroll-smooth">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center items-center relative overflow-hidden py-12 px-4 sm:px-8 lg:p-24">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary-light rounded-full blur-[100px] opacity-70"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#f3e8ff] rounded-full blur-[100px] opacity-70"></div>
        </div>

        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 flex-1">
          {/* Text Content */}
          <header className="flex-[0.9] lg:flex-1 flex flex-col justify-center items-start z-10 w-full max-w-xl pt-2 lg:pt-0">
            <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
              <div className="relative w-10 h-10 lg:w-14 lg:h-14">
                <Image
                  src="/karga.webp"
                  alt="Karga Logo - KPSS Yanlış Defteri"
                  fill
                  sizes="(max-width: 1024px) 40px, 56px"
                  className="object-contain drop-shadow-md"
                />
              </div>
              <span className="text-3xl lg:text-4xl font-extrabold tracking-tight text-text-main">
                Karga KPSS
              </span>
            </div>

            {/* Byline Author and Date for AI Search Engines & Accessibility */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary mb-4 bg-surface/70 px-3 py-1.5 rounded-full border border-border/50">
              <span>Yazar: <strong className="text-text-main font-semibold">Karga Eğitim Ekibi</strong></span>
              <span>•</span>
              <time dateTime="2026-08-04" className="font-medium">Güncellenme: 4 Ağustos 2026</time>
            </div>

            <div className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-primary-light text-primary rounded-full font-semibold mb-3 lg:mb-6 shadow-sm border border-primary/10 text-xs sm:text-sm lg:text-base">
              🎯 KPSS Yanlış Defteri & Hata Soru Bankası
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 lg:mb-6 text-text-main leading-tight">
              KPSS'de Fark Yarat:
              <br />
              <span className="text-primary">Dijital Yanlış Defteri.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-text-secondary mb-6 lg:mb-10 leading-relaxed max-w-xs sm:max-w-md lg:max-w-lg">
              KPSS Genel Kültür, Genel Yetenek, Eğitim Bilimleri ve ÖABT sınavlarında çözemediğiniz ya da boş bıraktığınız soruların fotoğraflarını çekin. <strong>Telefondan yanlış defteri oluşturma</strong> konforu ile kendi <strong>hata soru bankası</strong> arşivinizi oluşturup akıllı tekrarlarla netlerinizi artırın!
            </p>

            {/* Dynamic QR Code Area for KPSS */}
            <div className="hidden lg:flex items-center gap-5 bg-surface/60 backdrop-blur-md p-4 pr-6 rounded-3xl border border-border/80 shadow-md hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-24 h-24 bg-white p-2.5 rounded-2xl border border-border/40 shadow-inner flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src={qrCodeUrl}
                  alt="Karga KPSS İndirme QR Kodu"
                  width={150}
                  height={150}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-extrabold text-text-main flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  Hemen Yükle
                </span>
                <span className="text-xs text-text-secondary mt-1.5 leading-relaxed max-w-[170px]">
                  Telefonunuzun kamerasıyla QR kodu taratarak Karga'yı anında indirin!
                </span>
              </div>
            </div>

            {/* App Store / Play Store Links for Mobile View */}
            <div className="flex lg:hidden flex-col sm:flex-row gap-3 w-full mt-6">
              <a
                id="download-appstore-link-kpss"
                target="_blank"
                href={iosUrl}
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-white w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base shadow-[0_8px_16px_rgba(99,102,241,0.25)] active:scale-95 transition-all duration-300"
              >
                App Store
              </a>
              <a
                id="download-googleplay-link-kpss"
                target="_blank"
                href={androidUrl}
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-surface text-text-main border-2 border-border w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base active:scale-95 transition-all duration-300 shadow-sm"
              >
                Google Play
              </a>
            </div>
          </header>

          {/* App Screens Content */}
          <div className="w-full lg:mt-0 z-10 perspective-1000 flex justify-center items-center lg:flex-1 lg:h-full">
            <div className="relative w-full h-[380px] sm:h-[520px] lg:h-full lg:max-h-[70vh] flex items-center justify-center">
              {/* Left Screen */}
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[120%] lg:-translate-x-[130%] w-auto h-[75%] lg:h-[80%] xl:h-[90%] aspect-[9/19.5] mt-4 lg:-mt-8 rotate-0 lg:-rotate-12 z-10 opacity-90 hover:opacity-100 hover:z-40 lg:hover:scale-105 lg:hover:-rotate-6 transition-all duration-500">
                <Image
                  src="/library.webp"
                  alt="Karga KPSS Yanlış Defteri Uygulaması - Kütüphane Görünümü"
                  fill
                  sizes="(max-width: 640px) 25vw, (max-width: 1024px) 30vw, 20vw"
                  className="object-contain drop-shadow-xl"
                />
              </div>

              {/* Center Screen */}
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-auto h-[90%] lg:h-[95%] xl:h-[100%] aspect-[9/19.5] z-30 hover:scale-105 transition-all duration-500">
                <Image
                  src="/add.webp"
                  alt="Karga KPSS Telefondan Yanlış Defteri Oluşturma Ekranı"
                  fill
                  priority
                  sizes="(max-width: 640px) 35vw, (max-width: 1024px) 40vw, 30vw"
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Right Screen */}
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-[20%] lg:translate-x-[30%] w-auto h-[75%] lg:h-[80%] xl:h-[90%] aspect-[9/19.5] mt-4 lg:-mt-8 rotate-0 lg:rotate-12 z-20 opacity-90 hover:opacity-100 hover:z-40 lg:hover:scale-105 lg:hover:rotate-6 transition-all duration-500">
                <Image
                  src="/reminder.webp"
                  alt="Karga KPSS Akıllı Hatırlatıcı ile Tekrar Et"
                  fill
                  sizes="(max-width: 640px) 25vw, (max-width: 1024px) 30vw, 20vw"
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEO & AI Search Capsule Content Section with Semantic Article Markup */}
      <article className="w-full bg-surface border-t border-border py-16 px-4 sm:px-8 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary-light rounded-full blur-[120px] opacity-40 pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#f3e8ff] rounded-full blur-[120px] opacity-40 pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto z-10 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight mb-4 leading-tight">
              KPSS Adayları İçin <span className="text-primary">Dijital Yanlış Defteri</span> Uygulaması
            </h2>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              KPSS sınav maratonunda en çok hata yaptığınız ders ve konuları kontrol altına alın. Karga, yanlış yaptığınız her soruyu akıllı telefonunuzdan saniyeler içinde arşivlemenizi sağlar.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Card 1 */}
            <section className="bg-background rounded-3xl p-6 sm:p-8 border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-3">
                KPSS Yanlış Defteri ile Hataları Fırsata Çevirin
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Tarih, Coğrafya, Vatandaşlık, Matematik veya Türkçe testlerinde çözemediğiniz soruların fotoğrafını çekerek kendi kişisel <strong>KPSS yanlış defteri</strong> arşivinizi oluşturun. Sınav gününe kadar tüm hatalarınızı tek bir dijital platformda saklayın.
              </p>
            </section>

            {/* Card 2 */}
            <section className="bg-background rounded-3xl p-6 sm:p-8 border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-3">
                Zaman Kazandıran Telefondan Yanlış Defteri Oluşturma
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Kitapları kesip kartonlara yapıştırma zahmetine son verin. Akıllı telefon kameranız yardımıyla saniyeler içinde <strong>telefondan yanlış defteri oluşturma</strong> kolaylığını keşfedin. Soru eklerken ders ve konu etiketlerini ekleyerek düzenli bir çalışma planı uygulayın.
              </p>
            </section>

            {/* Card 3 */}
            <section className="bg-background rounded-3xl p-6 sm:p-8 border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-3">
                KPSS Konularına Özel Hata Soru Bankası
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Karga'nın gelişmiş etiketleme yapısıyla KPSS Eğitim Bilimleri, ÖABT veya Genel Yetenek derslerini modüllere bölün. Her konu başlığında hangi hataları yaptığınızı kolayca filtreleyin ve sınav öncesinde sadece takıldığınız soruları gözden geçirin.
              </p>
            </section>

            {/* Card 4 */}
            <section className="bg-background rounded-3xl p-6 sm:p-8 border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-3">
                Öğrenmeyi Kalıcı Kılan Akıllı Hatırlatıcı
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Eklediğiniz hatalı soruları belirli periyotlarla (1 gün, 3 gün, 7 gün) size hatırlatan akıllı sistem sayesinde yanlışlarınızı tam olarak öğrenene kadar tekrar edin. KPSS sınav gününde aynı hataları yapmaktan kurtulun.
              </p>
            </section>
          </div>

          {/* RAG-friendly Capsule Info Section */}
          <section className="bg-primary-light/50 rounded-3xl border border-primary/10 p-6 sm:p-10 relative overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-extrabold text-text-main mb-6 flex items-center gap-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              KPSS Adayları İçin Yapay Zeka Özeti ve SSS (GEO / RAG)
            </h3>

            <div className="space-y-6 text-sm sm:text-base text-text-secondary">
              <div className="border-b border-border/60 pb-4">
                <span className="font-bold text-text-main block mb-1">Karga KPSS Yanlış Defteri Nedir?</span>
                <p className="leading-relaxed">
                  Karga; KPSS Genel Yetenek-Genel Kültür, Eğitim Bilimleri ve ÖABT oturumlarına hazırlanan adayların deneme sınavlarında veya soru bankalarında çözemedikleri, boş bıraktıkları soruları fotoğraflayarak mobil ortamda dijital bir <strong>hata soru bankası</strong> oluşturmalarını sağlayan bir eğitim uygulamasıdır.
                </p>
              </div>

              <div className="border-b border-border/60 pb-4">
                <span className="font-bold text-text-main block mb-1">Telefondan KPSS Yanlış Defteri Nasıl Oluşturulur?</span>
                <p className="leading-relaxed">
                  Karga uygulamasını indirdikten sonra, çözemediğiniz sorunun fotoğrafını çekip kırpın. Ders (örn: Tarih) ve konu (örn: Osmanlı Tarihi) etiketlerini belirterek soruyu kaydedin. Karga sizin için soruyu saklar ve belirli aralıklarla tekrar çözmenizi hatırlatır.
                </p>
              </div>

              <div className="border-b border-border/60 pb-4">
                <span className="font-bold text-text-main block mb-1">Karga'nın KPSS Adaylarına Sağladığı Avantajlar Nelerdir?</span>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li><strong>Zaman Tasarrufu:</strong> Kağıt kesme, deftere yapıştırma ve düzenleme zahmetini ortadan kaldırır. Haftada ortalama 3.5 saat kazandırır.</li>
                  <li><strong>Ders Bazlı Soru Analizi:</strong> Hangi derste ve konuda daha fazla hata yaptığınızı kolayca görün.</li>
                  <li><strong>Bilimsel Tekrar (Spaced Repetition):</strong> Hatalı soruları unutma eğrisine göre sistemli olarak tekrar çözün.</li>
                  <li><strong>Çevrimdışı Çalışma Desteği:</strong> İnternetiniz olmasa bile soru ekleyin ve kütüphanenizi inceleyin.</li>
                </ul>
              </div>

              <div>
                <span className="font-bold text-text-main block mb-1">Uygulama Hangi Platformlarda Mevcuttur?</span>
                <p className="leading-relaxed">
                  Karga mobil uygulaması iOS işletim sistemli cihazlar için <strong>App Store</strong>, Android işletim sistemli cihazlar için ise <strong>Google Play Store</strong> üzerinden ücretsiz olarak indirilip kullanılabilir.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="w-full bg-background border-t border-border/60 py-8 px-4 sm:px-8 text-center text-xs sm:text-sm text-text-secondary z-10 animate-fade-in">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Karga App. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/kargaapp/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/enesergun/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="mailto:enesergun1515@gmail.com" className="hover:text-primary transition-colors">İletişim</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

