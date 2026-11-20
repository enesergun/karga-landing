import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kullanım Koşulları (Terms of Service) | Karga App",
  description:
    "Karga uygulamasının kullanım koşulları, kullanıcı hakları ve hizmet şartları.",
  alternates: {
    canonical: "https://kargasoru.netlify.app/terms",
  },
};

export default function TermsPage() {
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
            Son Güncelleme / Last Updated: 20 Kasım 2026
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-text-main tracking-tight">
            Kullanım Koşulları / Terms of Service
          </h1>
          <p className="mt-2 text-sm sm:text-base text-text-secondary">
            Karga uygulamasını ve web sitesini kullanarak aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. Lütfen bu koşulları dikkatlice okuyunuz.
          </p>
        </header>

        {/* 1. Hizmet Tanımı */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            1. Hizmet Tanımı ve Kapsamı
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Karga (“Karga App”), öğrencilerin sınav hazırlık süreçlerinde yanlış yaptıkları veya boş bıraktıkları soruları fotoğraflayarak dijital ortamda saklamalarını, kategorize etmelerini ve akıllı tekrar algoritmalarıyla öğrenmelerini pekiştirmelerini sağlayan bir mobil ve web hizmetidir.
          </p>
        </section>

        {/* 2. Kullanıcı Hesapları ve Google Girişi */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            2. Kullanıcı Hesapları ve Güvenlik
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Uygulamanın özelliklerinden (soru senkronizasyonu, bulut yedekleme vb.) tam olarak yararlanabilmek için kullanıcı hesabı oluşturulması gerekmektedir. Kullanıcılar Google ile Giriş Yap (Google Sign-In) altyapısını kullanarak pratik ve güvenli şekilde hesap oluşturabilir. Kullanıcı, hesap erişim bilgilerinin güvenliğinden ve hesabı altında gerçekleşen tüm faaliyetlerden kendisi sorumludur.
          </p>
        </section>

        {/* 3. Kabul Edilebilir Kullanım ve Fikri Mülkiyet */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            3. Kabul Edilebilir Kullanım ve Yüklenen İçerikler
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Kullanıcılar uygulamaya yükledikleri fotoğraf, metin ve notların yasal mevzuata uygun olmasından sorumludur. Telif haklarını ihlal eden, zararlı, yasa dışı veya üçüncü tarafların haklarını çiğneyen içeriklerin yüklenmesi yasaktır. Karga, bu tür içerikleri tespit ettiğinde kaldırma veya ilgili hesabı sonlandırma hakkını saklı tutar.
          </p>
        </section>

        {/* 4. Hizmette Değişiklik ve Kesintiler */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            4. Hizmet Değişiklikleri ve Sorumluluğun Sınırlandırılması
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Karga, hizmetin kesintisiz veya hatasız çalışacağını garanti etmez; ancak en yüksek kararlılıkta hizmet sunmak için gerekli teknik tedbirleri alır. Karga, uygulama özelliklerini önceden bildirimde bulunarak veya bulunmaksızın güncelleme, değiştirme veya durdurma hakkını saklı tutar.
          </p>
        </section>

        {/* 5. Karga Kanat Aboneliği */}
        <section id="karga-kanat" className="space-y-3 scroll-mt-8">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            5. Karga Kanat Aboneliği
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Karga Kanat, Karga&apos;nın yapay zekâ ile soru çözme özelliğini (“Karga çözsün”) açan, otomatik yenilenen bir aboneliktir. Kullanım hakların (ör. günlük çözüm sayısı) uygulamada gösterilir; adil kullanım için değiştirilebilir.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-text-secondary text-sm sm:text-base">
            <li>
              <strong className="text-text-main">Planlar ve fiyatlar:</strong> Aylık ₺149,99 ve yıllık ₺899,99 (Türkiye, vergiler dahil). Diğer ülkelerde mağazanın yerel fiyatı geçerlidir. Fiyat değişiklikleri mağaza kurallarına göre sana önceden bildirilir.
            </li>
            <li>
              <strong className="text-text-main">Ücretsiz deneme:</strong> Yeni abonelere 2 haftalık ücretsiz deneme sunulabilir; her mağaza hesabı bundan bir kez yararlanır. Deneme bitmeden en az 24 saat önce iptal etmezsen seçtiğin planın ücreti alınır.
            </li>
            <li>
              <strong className="text-text-main">Ödeme:</strong> Ödeme App Store ya da Google Play hesabından alınır. Karga kart bilgilerine erişmez.
            </li>
            <li>
              <strong className="text-text-main">Otomatik yenileme:</strong> Dönem bitmeden en az 24 saat önce kapatmazsan abonelik aynı süre ve fiyatla yenilenir. Yenileme ücreti dönemin bitmesine 24 saat kala çekilir.
            </li>
            <li>
              <strong className="text-text-main">İptal:</strong>{" "}Uygulamada Profil › Karga Kanat › Aboneliğini yönet adımlarından; iOS&apos;ta Ayarlar › Apple Kimliği › Abonelikler; Android&apos;de Play Store › Profil › Ödemeler ve abonelikler › Abonelikler bölümünden iptal edebilirsin. İptalden sonra erişimin ödediğin dönemin sonuna kadar sürer; kalan süre için kısmi iade yapılmaz.
            </li>
            <li>
              <strong className="text-text-main">İade:</strong> İade talepleri ilgili mağazanın politikasına tabidir (Apple için{" "}
              <a href="https://reportaproblem.apple.com" className="text-primary underline" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>, Google Play için{" "}
              <a href="https://support.google.com/googleplay/answer/2479637" className="text-primary underline" target="_blank" rel="noopener noreferrer">Google Play iade politikası</a>). Tüketici mevzuatından doğan hakların saklıdır.
            </li>
            <li>
              <strong className="text-text-main">Geri yükleme:</strong> Aboneliğini aynı mağaza hesabıyla uygulamadaki “Satın alımları geri yükle” seçeneğinden geri getirebilirsin. Giriş yapmışsan abonelik hesabına bağlanır.
            </li>
            <li>
              <strong className="text-text-main">Ücretsiz kullanım:</strong> Giriş yapan kullanıcılara sınırlı sayıda ücretsiz çözüm sunulabilir; miktarı uygulamada gösterilir.
            </li>
          </ul>
        </section>

        {/* 6. Yapay Zekâ Çözümleri */}
        <section id="yapay-zeka" className="space-y-3 scroll-mt-8">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            6. Yapay Zekâ ile Üretilen Çözümler
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Karga&apos;nın çözümleri yapay zekâ ile otomatik üretilir ve hatalı olabilir. Çözümler eğitim amaçlı yardımcı içeriktir; cevap anahtarının, öğretmeninin ya da resmî kaynakların yerini tutmaz. Cevabı her zaman kendi kaynağınla karşılaştır. Soru fotoğraflarının nasıl işlendiği{" "}
            <Link href="/privacy" className="text-primary underline">Gizlilik Politikası</Link>&apos;nda anlatılır.
          </p>
        </section>

        {/* 7. Hesap Silme ve Fesih */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            7. Hesap Kapatma ve Sözleşmenin Feshi
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Kullanıcılar diledikleri zaman hesaplarını uygulama içi ayarlar bölümünden kapatabilir veya <a href="mailto:enesergun1515@gmail.com" className="text-primary underline">enesergun1515@gmail.com</a> adresine e-posta göndererek hesaplarının ve tüm verilerinin silinmesini talep edebilir.
          </p>
        </section>

        {/* 8. İletişim */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            8. İletişim
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Kullanım koşullarıyla ilgili sorularınız için bizimle iletişime geçebilirsiniz:
          </p>
          <p className="text-text-secondary text-sm sm:text-base font-medium">
            Geliştirici: Enes Ergün<br />
            E-posta: <a href="mailto:enesergun1515@gmail.com" className="text-primary underline">enesergun1515@gmail.com</a>
          </p>
        </section>
      </article>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-text-secondary">
        <p>© {new Date().getFullYear()} Karga App. Tüm Hakları Saklıdır.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-primary transition-colors">Gizlilik Politikası</Link>
          <span>•</span>
          <a href="mailto:enesergun1515@gmail.com" className="hover:text-primary transition-colors">İletişim</a>
        </div>
      </footer>
    </main>
  );
}
