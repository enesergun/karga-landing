import Image from "next/image";
import QrCodeCard from "./components/QrCodeCard";

export default function Home() {
  return (
    <main className="w-full min-h-[100dvh] flex flex-col bg-background text-text-main relative overflow-x-hidden scroll-smooth">
      
      {/* Hero Section */}
      <section className="w-full min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center items-center relative overflow-hidden py-12 px-4 sm:px-8 lg:p-24">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary-light rounded-full blur-[100px] opacity-70"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#f3e8ff] rounded-full blur-[100px] opacity-70"></div>
        </div>

        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 flex-1">
          {/* Text Content */}
          <div className="flex-[0.9] lg:flex-1 flex flex-col justify-center items-start z-10 w-full max-w-xl pt-2 lg:pt-0">
            <header className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-8">
              <div className="relative w-10 h-10 lg:w-14 lg:h-14">
                <Image
                  src="/karga.webp"
                  alt="Karga Logo - Dijital Soru ve Yanlış Defteri"
                  fill
                  sizes="(max-width: 1024px) 40px, 56px"
                  className="object-contain drop-shadow-md"
                />
              </div>
              <span className="text-3xl lg:text-4xl font-extrabold tracking-tight text-text-main">
                Karga
              </span>
            </header>
            
            <div className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-primary-light text-primary rounded-full font-semibold mb-3 lg:mb-6 shadow-sm border border-primary/10 text-xs sm:text-sm lg:text-base">
              ✨ Dijital Soru Defteri & Hata Soru Bankası
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 lg:mb-6 text-text-main leading-tight">
              Sınavda Fark Yarat:
              <br />
              <span className="text-primary">Dijital Yanlış Defteri.</span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-text-secondary mb-6 lg:mb-10 leading-relaxed max-w-xs sm:max-w-md lg:max-w-lg">
              KPSS, YKS, LGS sınavlarında çözemediğin veya boş bıraktığın soruların fotoğrafını çekip <strong>telefondan yanlış defteri oluşturma</strong> kolaylığını yaşa. Karga <strong>dijital soru bankası</strong> ile hatalı soruları kaydet, akıllı tekrar programıyla başarını katla!
            </p>

            <QrCodeCard />

            {/* Social Media & Contact (Desktop only) */}
            <div className="hidden lg:flex mt-6 lg:mt-10 flex-wrap gap-3 items-center z-10 w-full animate-fade-in">
              <a
                id="social-instagram-link"
                href="https://www.instagram.com/kargaapp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Karga Instagram Hesabı"
                title="Instagram @kargaapp"
                className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              <a
                id="social-linkedin-link"
                href="https://www.linkedin.com/in/enesergun/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enes Ergün LinkedIn Profili"
                title="LinkedIn Enes Ergün"
                className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a
                id="social-email-link"
                href="mailto:enesergun1515@gmail.com"
                aria-label="E-posta Gönder"
                title="E-posta: enesergun1515@gmail.com"
                className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Images Content */}
          <div className="w-full lg:mt-0 z-10 perspective-1000 flex justify-center items-center lg:flex-1 lg:h-full">
            <div className="relative w-full h-[380px] sm:h-[520px] lg:h-full lg:max-h-[70vh] flex items-center justify-center">
              {/* Left App Screen */}
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[120%] lg:-translate-x-[130%] w-auto h-[75%] lg:h-[80%] xl:h-[90%] aspect-[9/19.5] mt-4 lg:-mt-8 rotate-0 lg:-rotate-12 z-10 opacity-90 hover:opacity-100 hover:z-40 lg:hover:scale-105 lg:hover:-rotate-6 transition-all duration-500">
                <Image
                  src="/library.webp"
                  alt="Karga Mobil Uygulaması Kütüphane Ekranı - Çözemediğin Soruları Listele ve Filtrele"
                  fill
                  sizes="(max-width: 640px) 25vw, (max-width: 1024px) 30vw, 20vw"
                  className="object-contain drop-shadow-xl"
                />
              </div>

              {/* Center App Screen */}
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-auto h-[90%] lg:h-[95%] xl:h-[100%] aspect-[9/19.5] z-30 hover:scale-105 transition-all duration-500">
                <Image
                  src="/add.webp"
                  alt="Karga Mobil Uygulaması Soru Ekleme Ekranı - Sorunun Fotoğrafını Çek ve Kütüphanene Kaydet"
                  fill
                  priority
                  sizes="(max-width: 640px) 35vw, (max-width: 1024px) 40vw, 30vw"
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Right App Screen */}
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-[20%] lg:translate-x-[30%] w-auto h-[75%] lg:h-[80%] xl:h-[90%] aspect-[9/19.5] mt-4 lg:-mt-8 rotate-0 lg:rotate-12 z-20 opacity-90 hover:opacity-100 hover:z-40 lg:hover:scale-105 lg:hover:rotate-6 transition-all duration-500">
                <Image
                  src="/reminder.webp"
                  alt="Karga Mobil Uygulaması Akıllı Hatırlatıcı Ekranı - Yanlış Soruları Programlı Olarak Tekrar Et"
                  fill
                  sizes="(max-width: 640px) 25vw, (max-width: 1024px) 30vw, 20vw"
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Actions (Visible on Mobile/Tablet only) */}
        <div className="flex lg:hidden flex-col items-center gap-6 w-full mt-8 z-20">
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center items-center">
            <a
              id="download-appstore-link-mobile"
              target="_blank"
              href="https://apps.apple.com/tr/app/karga-sorular%C4%B1-asla-unutma/id6770515165"
              aria-label="App Store'dan Karga uygulamasını indirin"
              className="flex items-center justify-center gap-2 bg-primary text-surface w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base shadow-[0_8px_16px_rgba(99,102,241,0.25)] active:scale-95 transition-all duration-300"
            >
              <svg
                viewBox="0 0 384 512"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              App Store
            </a>
            <a
              id="download-googleplay-link-mobile"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.ergunenes.sorucek&pcampaignid=web_share"
              aria-label="Google Play Store'dan Karga uygulamasını indirin"
              className="flex items-center justify-center gap-2 bg-surface text-text-main border-2 border-border w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base active:scale-95 transition-all duration-300 shadow-sm"
            >
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              Google Play
            </a>
          </div>

          {/* Social Media & Contact */}
          <div className="flex flex-wrap gap-3 items-center justify-center w-full">
            <a
              id="social-instagram-link-mobile"
              href="https://www.instagram.com/kargaapp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Karga Instagram Hesabı"
              title="Instagram @kargaapp"
              className="w-11 h-11 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary active:scale-95 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            <a
              id="social-linkedin-link-mobile"
              href="https://www.linkedin.com/in/enesergun/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enes Ergün LinkedIn Profili"
              title="LinkedIn Enes Ergün"
              className="w-11 h-11 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary active:scale-95 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a
              id="social-email-link-mobile"
              href="mailto:enesergun1515@gmail.com"
              aria-label="E-posta Gönder"
              title="E-posta: enesergun1515@gmail.com"
              className="w-11 h-11 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary active:scale-95 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator (Desktop only) */}
        <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text-secondary animate-bounce cursor-pointer z-20">
          <span className="text-xs font-semibold tracking-wider uppercase opacity-70">Daha Fazla Bilgi</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* GEO & AI Search Optimized Capsule Content Section */}
      <section className="w-full bg-surface border-t border-border py-16 px-4 sm:px-8 lg:py-24 relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary-light rounded-full blur-[120px] opacity-40 pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#f3e8ff] rounded-full blur-[120px] opacity-40 pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto z-10 relative">
          
          {/* H2 Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight mb-4 leading-tight">
              Yapay Zeka Destekli <span className="text-primary">Dijital Soru Bankası</span> & <span className="text-secondary">Yanlış Defteri</span> Uygulaması
            </h2>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              KPSS, YKS ve LGS gibi sınavlara hazırlanırken yaptığın hatalardan ders çıkar. Karga, telefondan yanlış defteri oluşturma sürecini en kolay ve en verimli hale getiren akıllı asistanındır.
            </p>
          </div>

          {/* Grid of H3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Card 1 */}
            <div className="bg-background rounded-3xl p-6 sm:p-8 border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-light text-primary rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-3">
                KPSS Yanlış Defteri Uygulaması ile Sınavlara Hazırlan
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                KPSS sınav sürecinde Genel Kültür, Genel Yetenek ve Alan Bilgisi testlerinde çözemediğin ya da boş bıraktığın soruların fotoğraflarını çekerek eksiksiz bir <strong>KPSS yanlış defteri uygulaması</strong> deneyimi yaşa. Karga, her ders için özel kategoriler oluşturarak konuları nerede eksik bıraktığını saniyeler içinde analiz etmeni sağlar.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-background rounded-3xl p-6 sm:p-8 border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-light text-primary rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316A2.192 2.192 0 0014.502 4h-5.004c-.63 0-1.213.31-1.566.82l-.822 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-3">
                Telefondan Yanlış Defteri Oluşturma Kolaylığı
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Kağıt kesip yapıştırmaya son ver. Akıllı telefonunun kamerasını kullanarak saniyeler içinde <strong>telefondan yanlış defteri oluşturma</strong> konforunu yaşa. Karga, çektiğin fotoğrafları kırpmanı, ders ve konu başlıklarına göre etiketlemeni ve aradığında anında bulmanı sağlar.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-background rounded-3xl p-6 sm:p-8 border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-light text-primary rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-3">
                YKS Hatalı Soruları Kaydetme ve Arşivleme
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                TYT ve AYT denemelerinde gözden kaçan her soru sınavda karşına çıkabilir. Karga'nın <strong>YKS hatalı soruları kaydetme</strong> altyapısı sayesinde, çözemediğin Matematik, Fizik, Türkçe veya Tarih sorularını tek bir ekranda topla. Çözümleri arşivleyerek eksik konularını hızla kapat.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-background rounded-3xl p-6 sm:p-8 border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary-light text-primary rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-3">
                Akıllı Tekrar ve Hatırlatıcı Algoritması
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Sadece kaydetmek yetmez. Karga'nın akıllı algoritması, eklediğin soruları çalışma programına uygun aralıklarla sana yeniden hatırlatır. Böylece yanlış yaptığın soruları tam olarak öğrenene kadar tekrar eder, bilginin kalıcı olmasını sağlarsın.
              </p>
            </div>
          </div>

          {/* RAG-friendly Capsule Info Section */}
          <div className="bg-primary-light/50 rounded-3xl border border-primary/10 p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[20%] h-[20%] bg-primary rounded-full blur-[80px] opacity-10 pointer-events-none -z-10"></div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-text-main mb-6 flex items-center gap-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Karga Hakkında Hızlı Bilgiler ve Sıkça Sorulan Sorular
            </h4>
            
            <div className="space-y-6 text-sm sm:text-base text-text-secondary">
              <div className="border-b border-border/60 pb-4">
                <span className="font-bold text-text-main block mb-1">Karga Nedir?</span>
                <p className="leading-relaxed">
                  Karga; YKS, KPSS ve LGS gibi merkezi sınavlara hazırlanan öğrencilerin, denemelerde veya test kitaplarında çözemedikleri ya da boş bıraktıkları soruları fotoğraflayarak mobil cihazlarında dijital bir <strong>yanlış defteri</strong> ve <strong>dijital soru bankası</strong> oluşturmalarını sağlayan bir eğitim uygulamasıdır.
                </p>
              </div>

              <div className="border-b border-border/60 pb-4">
                <span className="font-bold text-text-main block mb-1">Karga Hangi Sorunu Çözer?</span>
                <p className="leading-relaxed">
                  Öğrencilerin fiziki test kitaplarını kesip yapıştırma zahmetini tamamen ortadan kaldırır. Yanlış yapılan veya boş bırakılan soruların kaybolmasını önler, ders ve konu bazlı kategorizasyon sağlar ve bilimsel tekrar aralıklarıyla (1, 3, 7 gün vb.) soruları hatırlatarak öğrenimi kalıcılaştırır.
                </p>
              </div>

              <div className="border-b border-border/60 pb-4">
                <span className="font-bold text-text-main block mb-1">Karga Temel Özellikleri Nelerdir?</span>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li><strong>Fotoğraflı Soru Ekleme:</strong> Çözemediğin soruyu kameranla anında çek veya galeriden yükle.</li>
                  <li><strong>Detaylı Soru Etiketleme:</strong> Ders, konu ve zorluk derecesine göre gruplandır.</li>
                  <li><strong>Akıllı Hatırlatıcı Programı:</strong> Soru ekleme sonrasında belirli gün aralıklarında bildirimlerle otomatik tekrar et.</li>
                  <li><strong>İnternetsiz Erişim (Çevrimdışı):</strong> İnternet bağlantısı olmadan da soru ekleme ve kütüphaneni yönetme.</li>
                  <li><strong>Mobil Odaklı Deneyim:</strong> Hızlı, akıcı ve pratik mobil arayüz.</li>
                </ul>
              </div>

              <div>
                <span className="font-bold text-text-main block mb-1">Karga Hangi Cihazlarda Kullanılabilir?</span>
                <p className="leading-relaxed">
                  Karga mobil uygulaması; iOS (iPhone) platformu için <strong>App Store</strong> ve Android platformu için <strong>Google Play Store</strong> üzerinden ücretsiz indirilebilir.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-background border-t border-border/60 py-8 px-4 sm:px-8 text-center text-xs sm:text-sm text-text-secondary z-10">
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
