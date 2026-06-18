import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-[100dvh] h-auto lg:h-[100dvh] flex flex-col lg:flex-row items-center justify-center bg-background text-text-main pt-10 pb-16 px-4 sm:px-8 lg:p-24 overflow-x-hidden overflow-y-auto lg:overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary-light rounded-full blur-[100px] opacity-70"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#f3e8ff] rounded-full blur-[100px] opacity-70"></div>
      </div>

      {/* Text Content */}
      <div className="flex-[0.9] lg:flex-1 flex flex-col justify-center items-start z-10 w-full max-w-xl pt-2 lg:pt-0">
        <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-8">
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
        </div>
        <div className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-primary-light text-primary rounded-full font-semibold mb-3 lg:mb-6 shadow-sm border border-primary/10 text-xs sm:text-sm lg:text-base">
          ✨ Dijital Soru ve Yanlış Defteri
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-3 lg:mb-6 text-text-main leading-tight">
          Yanlışlarını
          <br />
          <span className="text-primary">Unutmadan tekrarla.</span>
        </h1>
        <p className="text-sm sm:text-base lg:text-xl text-text-secondary mb-6 lg:mb-10 leading-relaxed max-w-xs sm:max-w-md lg:max-w-lg">
          Takıldığın soruları fotoğrafla, kütüphanene ekle ve çalışma programına
          uygun zamanlarda tekrar hatırlat. Başarı artık tamamen senin elinde!
        </p>

        {/* Download Buttons (Desktop only) */}
        <div className="hidden lg:flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            id="download-appstore-link"
            target="_blank"
            href="https://apps.apple.com/tr/app/karga-sorular%C4%B1-asla-unutma/id6770515165"
            aria-label="App Store'dan Karga uygulamasını indirin"
            className="flex items-center justify-center gap-2 bg-primary text-surface px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-sm lg:text-lg shadow-[0_8px_16px_rgba(99,102,241,0.25)] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(99,102,241,0.35)] transition-all duration-300"
          >
            <svg
              viewBox="0 0 384 512"
              fill="currentColor"
              className="w-5 h-5 lg:w-6 lg:h-6"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            App Store
          </a>
          <a
            id="download-googleplay-link"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.ergunenes.sorucek&pcampaignid=web_share"
            aria-label="Google Play Store'dan Karga uygulamasını indirin"
            className="flex items-center justify-center gap-2 bg-surface text-text-main border-2 border-border px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-sm lg:text-lg hover:border-primary hover:text-primary transition-all duration-300 shadow-sm"
          >
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-5 h-5 lg:w-6 lg:h-6"
            >
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            Google Play
          </a>
        </div>

        {/* Social Media & Contact (Desktop only) */}
        <div className="hidden lg:flex mt-6 lg:mt-10 flex-wrap gap-3 items-center z-10 w-full animate-fade-in">
          {/* Instagram */}
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
          
          {/* LinkedIn */}
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

          {/* Email */}
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

      {/* Mobile Actions (Visible on Mobile/Tablet only) */}
      <div className="flex lg:hidden flex-col items-center gap-6 w-full mt-8 z-20">
        {/* Buttons */}
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
          {/* Instagram */}
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
          
          {/* LinkedIn */}
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

          {/* Email */}
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
    </main>
  );
}
