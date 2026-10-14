import { headers } from "next/headers";
import { redirect } from "next/navigation";
import KodHeader from "../../components/karga-kodu/KodHeader";
import CodeForm from "../../components/karga-kodu/CodeForm";
import PrintButton from "../../components/karga-kodu/PrintButton";
import {
  fetchShare,
  formatCode,
  isBot,
  normalizeCode,
  type ShareError,
  type SharedQuestion,
} from "../../lib/kargaKodu";

const ERROR_COPY: Record<ShareError, { title: string; body: string }> = {
  not_found: {
    title: "Bu kod bulunamadı",
    body: "Kodu doğru yazdığından emin ol. Harf ve rakamları öğrenciden tekrar teyit edebilirsin.",
  },
  expired: {
    title: "Bu kodun süresi doldu",
    body: "Karga Kodları 7 gün geçerli. Öğrenci uygulamadan yeni bir kod oluşturabilir.",
  },
  revoked: {
    title: "Bu kod iptal edildi",
    body: "Öğrenci bu paylaşımı kapatmış. Gerekirse uygulamadan yeni bir kod oluşturabilir.",
  },
  unavailable: {
    title: "Şu an açılamıyor",
    body: "Bir bağlantı sorunu oldu. Birkaç saniye sonra sayfayı yenile.",
  },
};

function formatDate(ms: number) {
  return new Date(ms).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    timeZone: "Europe/Istanbul",
  });
}

export default async function SharedQuestionsPage({ params }: { params: Promise<{ code: string }> }) {
  const { code: raw } = await params;
  const code = normalizeCode(raw);
  if (!code) redirect(`/k?code=${encodeURIComponent(raw)}`);
  // "/k/k7f-32q" gibi yazımları tek adrese topla.
  if (raw !== code) redirect(`/k/${code}`);

  const userAgent = (await headers()).get("user-agent");
  const result = await fetchShare(code, !isBot(userAgent));

  if (!result.ok) {
    const copy = ERROR_COPY[result.error];
    return (
      <>
        <KodHeader />
        <section className="w-full max-w-xl flex flex-col items-center text-center mt-12 sm:mt-20">
          <span className="px-3 py-1 rounded-full bg-primary-light text-primary text-sm font-bold tracking-widest">
            {formatCode(code)}
          </span>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">{copy.title}</h1>
          <p className="mt-3 text-text-secondary leading-relaxed">{copy.body}</p>
          <div className="w-full mt-8">
            <CodeForm />
          </div>
        </section>
      </>
    );
  }

  const { share } = result;
  const lessons = Array.from(new Set(share.questions.map((q) => q.lesson).filter(Boolean)));

  return (
    <>
      <KodHeader />
      <section className="w-full max-w-3xl mt-4 sm:mt-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary-light text-primary text-sm font-bold tracking-widest">
              {formatCode(share.code)}
            </span>
            <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
              {share.questionCount} soru paylaşıldı
            </h1>
            <p className="mt-1 text-text-secondary">
              {lessons.length > 0 ? `${lessons.join(", ")} · ` : ""}
              {formatDate(share.expiresAt)} tarihine kadar açık
            </p>
          </div>
          <PrintButton />
        </div>

        <ol className="mt-8 flex flex-col gap-6">
          {share.questions.map((question, index) => (
            <QuestionCard key={index} index={index} question={question} />
          ))}
        </ol>

        <footer className="mt-12 text-center text-sm text-text-secondary print:hidden">
          Bu sorular <span className="font-semibold text-text-main">Karga</span> yanlış defteri uygulamasıyla paylaşıldı.{" "}
          <a
            href="/install?utm_source=karga_kodu&utm_medium=web"
            className="font-semibold text-primary hover:text-primary/80"
          >
            Sen de dene
          </a>
        </footer>
      </section>
    </>
  );
}

function QuestionCard({ index, question }: { index: number; question: SharedQuestion }) {
  return (
    <li className="bg-surface border border-border/80 rounded-3xl p-4 sm:p-6 shadow-sm break-inside-avoid">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
          {index + 1}
        </span>
        {question.lesson ? (
          <span className="px-3 py-1 rounded-full bg-primary-light text-primary text-sm font-semibold">
            {question.lesson}
          </span>
        ) : null}
        {question.topic ? (
          <span className="px-3 py-1 rounded-full bg-[#f5f3ff] text-secondary text-sm font-semibold">
            {question.topic}
          </span>
        ) : null}
        {question.reasonTag ? (
          <span className="px-3 py-1 rounded-full bg-[#fef3c7] text-[#b45309] text-sm font-semibold">
            {question.reasonTag}
          </span>
        ) : null}
      </div>

      {question.imageUrl ? (
        <a href={question.imageUrl} target="_blank" rel="noopener noreferrer" className="block">
          {/* Görseller Cloud Function proxy'sinden gelir; next/image optimizasyonu kullanılmaz. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={question.imageUrl}
            alt={`${index + 1}. soru`}
            loading={index < 2 ? "eager" : "lazy"}
            className="mx-auto w-auto max-w-full h-auto max-h-[80vh] object-contain rounded-2xl border border-border/60 bg-background"
          />
        </a>
      ) : (
        <p className="text-text-muted text-sm">Bu sorunun görseli yok.</p>
      )}

      {question.note ? (
        <div className="mt-4 rounded-2xl bg-background border border-border/60 px-4 py-3">
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wide">Öğrencinin notu</p>
          <p className="mt-1 text-text-main whitespace-pre-line">{question.note}</p>
        </div>
      ) : null}

      {question.solutionUrls && question.solutionUrls.length > 0 ? (
        <details className="mt-4 group">
          <summary className="cursor-pointer select-none text-sm font-bold text-primary print:hidden">
            Öğrencinin çözümü ({question.solutionUrls.length})
          </summary>
          <div className="mt-3 grid gap-3">
            {question.solutionUrls.map((url, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={url}
                src={url}
                alt={`${index + 1}. sorunun çözümü ${i + 1}`}
                loading="lazy"
                className="w-full h-auto rounded-2xl border border-border/60"
              />
            ))}
          </div>
        </details>
      ) : null}
    </li>
  );
}
