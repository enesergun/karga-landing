import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gizlilik Politikası (Privacy Policy) | Karga App",
  description:
    "Karga uygulamasının gizlilik politikası, veri toplama ve Google API verileri kullanım koşulları.",
  alternates: {
    canonical: "https://kargasoru.netlify.app/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full min-h-screen bg-background text-text-main flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Navigation */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-8 pb-4 border-b border-border/80">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <Image
              src="/karga.webp"
              alt="Karga Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <span className="text-xl font-bold text-text-main group-hover:text-primary transition-colors">
              Karga
            </span>
            <span className="block text-xs text-text-secondary">
              Dijital Soru & Yanlış Defteri
            </span>
          </div>
        </Link>
        <Link
          href="/"
          className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          ← Ana Sayfaya Dön
        </Link>
      </div>

      {/* Main Content Article */}
      <article className="w-full max-w-4xl bg-surface border border-border/80 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 leading-relaxed">
        <header className="border-b border-border/60 pb-6">
          <div className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-semibold mb-3">
            Son Güncelleme / Last Updated: 28 Eylül 2026
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-text-main tracking-tight">
            Gizlilik Politikası / Privacy Policy
          </h1>
          <p className="mt-2 text-sm sm:text-base text-text-secondary">
            Karga (“Karga App”, “biz”, “uygulama”), kullanıcılarının gizliliğine ve kişisel verilerinin korunmasına en üst düzeyde önem verir. Bu Gizlilik Politikası, Karga mobil uygulaması ve web sitesi tarafından toplanan, kullanılan ve saklanan bilgileri açıklar.
          </p>
        </header>

        {/* 1. Uygulamanın Amacı ve Kimliği */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            1. Uygulamanın Amacı ve Veri Sorumlusu / App Identity & Purpose
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            <strong>Karga</strong>, YKS, KPSS, LGS ve benzeri sınavlara hazırlanan öğrencilerin çözemedikleri veya yanlış yaptıkları soruları fotoğraflayarak dijital soru ve yanlış defteri oluşturmalarını, kategorize etmelerini ve akıllı hatırlatma programıyla düzenli tekrar etmelerini sağlayan bir eğitim uygulamasıdır.
          </p>
          <p className="text-text-secondary text-sm sm:text-base">
            <strong>Veri Sorumlusu (Developer / Controller):</strong> Enes Ergün<br />
            <strong>İletişim E-postası (Contact):</strong>{" "}
            <a href="mailto:enesergun1515@gmail.com" className="text-primary underline">
              enesergun1515@gmail.com
            </a>
          </p>
        </section>

        {/* 2. Toplanan Veriler */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            2. Toplanan Bilgiler ve Veri Türleri / Information We Collect
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Kullanıcı deneyimini sağlamak ve geliştirmek amacıyla yalnızca gerekli olan veriler toplanır:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-text-secondary text-sm sm:text-base">
            <li>
              <strong>Google Hesabı Bilgileri (Google OAuth 2.0):</strong> Uygulamamıza Google ile Giriş Yap (Google Sign-In) yöntemini kullanarak kaydolduğunuzda veya oturum açtığınızda; Google profilinizden yalnızca temel kimlik bilgileri (Ad-Soyad, E-posta adresi, profil fotoğrafı URL&apos;si ve benzersiz Google kullanıcı kimliği) alınır.
            </li>
            <li>
              <strong>Kullanıcı İçeriği (User Content):</strong> Soru kütüphanenize yüklediğiniz soru fotoğrafları, eklediğiniz soru notları, ders/konu etiketleri ve tekrar planı tercihleri.
            </li>
            <li>
              <strong>Cihaz ve Kullanım Verileri:</strong> Uygulamanın kararlı çalışabilmesi için işletim sistemi sürümü, cihaz modeli ve anonim hata analiz raporları.
            </li>
          </ul>
        </section>

        {/* 3. Verilerin Kullanım Amacı */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            3. Verilerin Kullanım Amacı / How We Use Your Information
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Toplanan veriler yalnızca aşağıdaki amaçlar doğrultusunda işlenir:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-text-secondary text-sm sm:text-base">
            <li>Kullanıcı hesabını oluşturmak, doğrulamak ve güvenli oturum yönetimini sağlamak.</li>
            <li>Soru fotoğraflarını ve çalışma verilerini bulut sunucularında saklayarak kullanıcının tüm cihazlarında (iOS, Android) anında senkronize etmek.</li>
            <li>Akıllı tekrar algoritması üzerinden kullanıcının seçtiği aralıklarla hatırlatıcı bildirimler göndermek.</li>
            <li>Kullanıcı desteği sağlamak ve teknik problemleri gidermek.</li>
          </ul>
        </section>

        {/* 4. Google API Kullanıcı Verileri ve Sınırlı Kullanım Şartı (ÖNEMLİ GOOGLE ŞARTI) */}
        <section className="space-y-3 bg-primary-light/40 border border-primary/20 rounded-2xl p-5">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            4. Google API Hizmetleri Kullanıcı Verisi Politikası / Google API Limited Use Disclosure
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Karga, Google kullanıcı verilerine yalnızca Google Sign-In doğrulaması amacıyla erişir. Hassas veya kısıtlı diğer Google verilerine erişim talep edilmez.
          </p>
          <div className="bg-surface p-4 rounded-xl border border-primary/20 text-text-main font-medium text-sm sm:text-base">
            <strong>Google Compliance Statement:</strong><br />
            Karga’s use and transfer to any other app of information received from Google APIs will adhere to the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </div>
          <p className="text-text-secondary text-xs sm:text-sm">
            Google kullanıcı verileri hiçbir şekilde reklam amaçlarıyla kullanılmaz, satılmaz veya üçüncü taraf veri sağlayıcılarına aktarılmaz.
          </p>
        </section>

        {/* 5. Veri Paylaşımı */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            5. Verilerin Paylaşımı ve Üçüncü Taraflar / Data Sharing
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Kullanıcılarımızın kişisel verilerini kesinlikle satmıyor, kiralamıyor ve ticari amaçlarla üçüncü şahıslara iletmiyoruz. Verileriniz yalnızca hizmetin teknik olarak sunulabilmesi için güvenilir bulut altyapı sağlayıcılarımız (sunucu ve veritabanı barındırma) üzerinde şifrelenmiş olarak işlenir.
          </p>
        </section>

        {/* 6. Veri Güvenliği ve Saklama */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            6. Veri Güvenliği ve Saklama / Data Security & Retention
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Verileriniz endüstri standardı güvenlik protokolleri (SSL/TLS şifreleme) ve güvenli sunucularda korunmaktadır. Verileriniz hesabınız aktif olduğu sürece ve hizmetin devamlılığı için gerekli süre boyunca saklanır.
          </p>
        </section>

        {/* 7. Hesap ve Veri Silme Talepleri (Data Deletion Instructions) */}
        <section className="space-y-3 bg-background border border-border/80 rounded-2xl p-5">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            7. Hesap ve Veri Silme Talepleri / Account & Data Deletion
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Kullanıcılarımız diledikleri zaman hesaplarının ve uygulamada saklanan tüm verilerinin (soru fotoğrafları, notlar, Google profil eşleşmeleri) kalıcı olarak silinmesini talep etme hakkına sahiptir.
          </p>
          <div className="space-y-2 text-text-secondary text-sm sm:text-base">
            <p><strong>Verilerinizi silmek için:</strong></p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Karga mobil uygulamasında <strong>Ayarlar &gt; Hesabımı Sil</strong> seçeneğini kullanabilirsiniz.</li>
              <li>Veya kayıtlı e-posta adresinizden <a href="mailto:enesergun1515@gmail.com" className="text-primary underline font-medium">enesergun1515@gmail.com</a> adresine konu başlığı <strong>&quot;Hesap ve Veri Silme Talebi (Data Deletion Request)&quot;</strong> olan bir e-posta gönderebilirsiniz.</li>
            </ol>
            <p className="text-xs text-text-muted mt-2">
              Talebiniz bize ulaştıktan sonra hesabınız ve tüm verileriniz en geç 30 gün içinde sistemlerimizden geri döndürülemez şekilde kalıcı olarak silinecektir.
            </p>
          </div>
        </section>

        {/* 8. İletişim */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            8. İletişim / Contact Us
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Gizlilik politikamız veya kişisel verilerinizle ilgili her türlü soru, görüş ve talepleriniz için bizimle iletişime geçebilirsiniz:
          </p>
          <p className="text-text-secondary text-sm sm:text-base font-medium">
            Geliştirici: Enes Ergün<br />
            E-posta: <a href="mailto:enesergun1515@gmail.com" className="text-primary underline">enesergun1515@gmail.com</a><br />
            Web: <a href="https://kargasoru.netlify.app" className="text-primary underline">https://kargasoru.netlify.app</a>
          </p>
        </section>
      </article>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-text-secondary">
        <p>© {new Date().getFullYear()} Karga App. Tüm Hakları Saklıdır.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-primary transition-colors">Kullanım Koşulları</Link>
          <span>•</span>
          <a href="mailto:enesergun1515@gmail.com" className="hover:text-primary transition-colors">İletişim</a>
        </div>
      </footer>
    </main>
  );
}
