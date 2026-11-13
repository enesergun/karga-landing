import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gizlilik Politikası (Privacy Policy) | Karga App",
  description:
    "Karga uygulamasının gizlilik politikası: toplanan veriler, yapay zekâ ile soru çözümü, üçüncü taraf hizmetler ve Google API verileri kullanım koşulları.",
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
            Son Güncelleme / Last Updated: 13 Kasım 2026
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
              <strong>Yapay Zekâ ile Çözüm Talepleri (AI Solve Requests):</strong> Karga Kanat&apos;ın yapay zekâ ile çözüm özelliğini kullandığınızda çözülmesini istediğiniz soru fotoğrafı, bu fotoğraf için üretilen çözüm metni ve kullanım sayısı (ör. aylık çözüm hakkınızın ne kadarını kullandığınız). Ayrıntılar 5.2. bölümdedir.
            </li>
            <li>
              <strong>Abonelik Bilgileri (Subscription Data):</strong> Karga Kanat aboneliği satın alırsanız aboneliğinizin türü, başlangıç ve bitiş tarihi ile aktif olup olmadığı. Ödeme ve kart bilgileriniz Apple App Store veya Google Play tarafından işlenir; bu bilgiler bize ulaşmaz.
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
            <li>Siz istediğinizde, gönderdiğiniz soru fotoğrafı için yapay zekâ ile adım adım çözüm üretmek.</li>
            <li>Yapay zekâ çözümlerinin doğruluğunu ve kalitesini ölçmek, hatalı çözümleri tespit edip özelliği iyileştirmek (5.2. bölüm).</li>
            <li>Abonelik durumunuzu doğrulamak ve ücretsiz/ücretli kullanım haklarınızı uygulamak.</li>
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
            Kullanıcılarımızın kişisel verilerini kesinlikle satmıyor, kiralamıyor ve reklam amacıyla üçüncü şahıslara iletmiyoruz. Hizmeti sunabilmek için verileriniz, yalnızca bizim adımıza ve talimatlarımızla işlem yapan aşağıdaki hizmet sağlayıcılarla, her biri için gerekli olan ölçüde paylaşılır:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-text-secondary text-sm sm:text-base">
            <li>
              <strong>Google Firebase (Google LLC):</strong> hesap doğrulama, veritabanı, soru fotoğraflarının depolanması, sunucu tarafı işlemler ve anonim kullanım analizi.
            </li>
            <li>
              <strong>Anthropic PBC (ABD):</strong> yalnızca yapay zekâ ile çözüm istediğiniz soru fotoğraflarının işlenmesi ve çözüm üretilmesi (5.2. bölüm).
            </li>
            <li>
              <strong>RevenueCat Inc. (ABD):</strong> Karga Kanat abonelik durumunun doğrulanması. Ad veya e-posta adresiniz yerine anonim bir kullanıcı kimliği kullanılır.
            </li>
            <li>
              <strong>Bildirim altyapısı:</strong> hatırlatıcı bildirimleri planlayan kendi sunucumuz; bildirimlerin cihazınıza iletilmesi için Expo, Apple Push Notification Service ve Firebase Cloud Messaging. Bu hizmetlere yalnızca cihazınızın bildirim anahtarı ve bildirim içeriği iletilir.
            </li>
            <li>
              <strong>Cloudflare Inc.:</strong> uygulama güncellemelerinin cihazınıza dağıtılması.
            </li>
            <li>
              <strong>Netlify Inc.:</strong> web sitemizin ve Karga Kodu paylaşım sayfalarının barındırılması.
            </li>
          </ul>
          <p className="text-text-secondary text-sm sm:text-base">
            Bu sağlayıcıların bir kısmının sunucuları Türkiye dışında (ağırlıklı olarak ABD ve Avrupa Birliği) bulunduğundan, verileriniz 6698 sayılı KVKK&apos;nın 9. maddesine uygun olarak yurt dışına aktarılabilir. Yasal bir yükümlülük veya yetkili bir makamın talebi dışında verileriniz başka hiçbir kişi veya kurumla paylaşılmaz.
          </p>
        </section>

        {/* 5.1 Karga Kodu ile Paylaşım — uygulamadaki paylaşım ekranı bu bölüme bağlanır (#karga-kodu) */}
        <section id="karga-kodu" className="space-y-3 scroll-mt-8 bg-primary-light/40 border border-primary/20 rounded-2xl p-5">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            5.1 Karga Kodu ile Paylaşım / Sharing via Karga Kodu
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Karga Kodu, seçtiğiniz soruları 6 haneli bir kod ve <strong>yanlisdefteri.com/k/KOD</strong> adresi üzerinden öğretmeninize, koçunuza veya arkadaşınıza telefonsuz göstermenizi sağlar. Paylaşım yalnızca siz kodu oluşturduğunuzda ve paylaşım ekranındaki bilgilendirmeyi onayladığınızda (açık rıza) yapılır.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-text-secondary text-sm sm:text-base">
            <li>
              <strong>Paylaşılan veriler:</strong> seçtiğiniz soruların fotoğrafları, ders ve konu bilgisi, yanlış nedeni etiketi; ayrıca yalnızca siz seçerseniz notlarınız ve çözüm fotoğraflarınız. Adınız, e-posta adresiniz, hesap ve cihaz bilgileriniz paylaşılmaz.
            </li>
            <li>
              <strong>Kimler görebilir:</strong> kodu veya bağlantıyı bilen herkes. Bu nedenle kodu yalnızca güvendiğiniz kişilerle paylaşmanızı, sosyal medyada paylaşmamanızı ve fotoğraflarda ad, okul, numara, yüz gibi kişisel bilgi olup olmadığını kontrol etmenizi öneririz. Paylaşım sayfaları arama motorlarına kapalıdır.
            </li>
            <li>
              <strong>Süre ve silme:</strong> kod 7 gün geçerlidir; uygulamadaki <strong>Profil &gt; Karga Kodlarım</strong> ekranından istediğiniz an iptal edebilirsiniz. İptal edilen veya süresi dolan paylaşımlar erişime kapanır ve 7 gün sonra sistemlerimizden kalıcı olarak silinir.
            </li>
            <li>
              <strong>Kayıt tutulan bilgiler:</strong> size gösterilmek üzere kodun kaç kez açıldığı ve en son ne zaman açıldığı saklanır. Kötüye kullanımı önlemek için ziyaretçilerin IP adresleri hız sınırlaması amacıyla işlenir; bu bilgi tarafımızca saklanmaz, ancak bulut altyapı sağlayıcımızın teknik erişim kayıtlarında sınırlı bir süre tutulabilir.
            </li>
            <li>
              <strong>Reşit olmayan kullanıcılar:</strong> 18 yaşından küçükseniz paylaşım yapmadan önce velinizle konuşmanızı öneririz.
            </li>
          </ul>
          <p className="text-text-secondary text-sm sm:text-base">
            6698 sayılı KVKK&apos;nın 11. maddesi kapsamındaki haklarınızı (bilgi talep etme, düzeltme, silme vb.) aşağıdaki iletişim adresi üzerinden kullanabilirsiniz.
          </p>
        </section>

        {/* 5.2 Yapay zekâ ile çözüm — uygulamadaki AI onay ekranı bu bölüme bağlanacak (#yapay-zeka) */}
        <section id="yapay-zeka" className="space-y-3 scroll-mt-8 bg-primary-light/40 border border-primary/20 rounded-2xl p-5">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            5.2 Yapay Zekâ ile Soru Çözümü / AI-Powered Solutions
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Karga Kanat, yanlış yaptığınız bir sorunun fotoğrafı için yapay zekâ ile adım adım çözüm üretir. Bu özellik için üçüncü taraf bir yapay zekâ hizmeti olan <strong>Anthropic PBC</strong>&apos;nin (ABD) Claude modellerini kullanıyoruz.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-text-secondary text-sm sm:text-base">
            <li>
              <strong>Ne zaman gönderilir:</strong>{" "}yalnızca siz bir soru için &quot;Çöz&quot; seçeneğine dokunduğunuzda. Kütüphanenizdeki diğer sorular, notlarınız ve çözüm fotoğraflarınız gönderilmez.
            </li>
            <li>
              <strong>Ne gönderilir:</strong> çözülmesini istediğiniz soru fotoğrafı ve çözümü düzenlemek için gereken talimatlar. Adınız, e-posta adresiniz, hesap ve cihaz bilgileriniz gönderilmez. Fotoğrafta adınız, okul bilginiz, yüzünüz gibi kişisel bilgiler varsa göndermeden önce kırpmanızı öneririz.
            </li>
            <li>
              <strong>Anthropic verinizi nasıl kullanır:</strong> Anthropic, ticari kullanım koşulları gereği bu hizmet üzerinden gönderilen verileri yapay zekâ modellerini eğitmek için kullanmaz. Veriler, kötüye kullanımı önlemeye yönelik güvenlik denetimleri için sınırlı bir süre (en fazla 30 gün) saklanıp silinir.
            </li>
            <li>
              <strong>Bizde ne saklanır:</strong> üretilen çözüm, sorunuzla birlikte hesabınızda saklanır; böylece çözümü tekrar açtığınızda yeniden işlem yapılmaz. Soruyu veya hesabınızı sildiğinizde çözüm de silinir.
            </li>
            <li>
              <strong>Kalite ölçümü:</strong> yapay zekâ çözümlerinin doğruluğunu ölçmek için, çözüm istenen soru fotoğraflarından bir kısmı ve üretilen çözümler ekibimiz tarafından incelenebilir ve aynı hizmet sağlayıcıyla yeniden çözdürülerek karşılaştırılabilir. Bu incelemelerde fotoğraflar hesap bilgilerinizle ilişkilendirilmez ve başka bir amaçla kullanılmaz. Sorularınızın bu kapsamda kullanılmasını istemiyorsanız aşağıdaki iletişim adresine yazmanız yeterlidir.
            </li>
            <li>
              <strong>Doğruluk:</strong> yapay zekâ çözümleri hatalı olabilir. Çözümü kendi kaynaklarınızla ve öğretmeninizle karşılaştırmanızı öneririz. Çözümler bilgilendirme amaçlıdır.
            </li>
            <li>
              <strong>Yurt dışına aktarım:</strong>{" "}Anthropic&apos;in sunucuları ABD&apos;de bulunduğundan, çözüm için gönderdiğiniz fotoğraf yurt dışına aktarılır. Bu özelliği ilk kez kullanmadan önce uygulama içinde bilgilendirilir ve onayınız alınır. Onay vermezseniz yapay zekâ ile çözüm özelliği dışındaki tüm özellikleri kullanmaya devam edebilirsiniz.
            </li>
            <li>
              <strong>Reşit olmayan kullanıcılar:</strong> 18 yaşından küçükseniz bu özelliği velinizin bilgisi dahilinde kullanmanızı öneririz.
            </li>
          </ul>
        </section>

        {/* 6. Veri Güvenliği ve Saklama */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            6. Veri Güvenliği ve Saklama / Data Security & Retention
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Verileriniz endüstri standardı güvenlik protokolleri (SSL/TLS şifreleme) ve güvenli sunucularda korunmaktadır. Verileriniz hesabınız aktif olduğu sürece ve hizmetin devamlılığı için gerekli süre boyunca saklanır. Yapay zekâ çözümleri ilgili soruyla birlikte saklanır ve soru silindiğinde silinir; üçüncü taraf hizmet sağlayıcıların saklama süreleri 5. ve 5.2. bölümlerde açıklanmıştır.
          </p>
        </section>

        {/* 7. Hesap ve Veri Silme Talepleri (Data Deletion Instructions) */}
        <section className="space-y-3 bg-background border border-border/80 rounded-2xl p-5">
          <h2 className="text-xl font-bold text-text-main flex items-center gap-2">
            7. Hesap ve Veri Silme Talepleri / Account & Data Deletion
          </h2>
          <p className="text-text-secondary text-sm sm:text-base">
            Kullanıcılarımız diledikleri zaman hesaplarının ve uygulamada saklanan tüm verilerinin (soru fotoğrafları, notlar, yapay zekâ çözümleri, Google profil eşleşmeleri) kalıcı olarak silinmesini talep etme hakkına sahiptir.
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
