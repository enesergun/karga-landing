import { redirect } from "next/navigation";
import KodHeader from "../components/karga-kodu/KodHeader";
import CodeForm from "../components/karga-kodu/CodeForm";
import { normalizeCode } from "../lib/kargaKodu";

export default async function KargaKoduEntryPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const { code: raw } = await searchParams;
  const code = normalizeCode(raw);
  if (code) redirect(`/k/${code}`);

  return (
    <>
      <KodHeader />
      <section className="w-full max-w-xl flex flex-col items-center text-center mt-12 sm:mt-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Karga Kodunu gir</h1>
        <p className="mt-3 text-text-secondary leading-relaxed">
          Öğrencinin Karga uygulamasında oluşturduğu 6 haneli kodu yaz, paylaştığı soruları gör.
        </p>
        {raw ? (
          <p className="mt-6 w-full rounded-2xl bg-[#fee2e2] text-error text-sm font-semibold px-4 py-3">
            Bu kod geçerli görünmüyor. Harfleri ve rakamları kontrol edip tekrar dene.
          </p>
        ) : null}
        <div className="w-full mt-8">
          <CodeForm defaultValue={raw ?? ""} autoFocus />
        </div>
      </section>
    </>
  );
}
