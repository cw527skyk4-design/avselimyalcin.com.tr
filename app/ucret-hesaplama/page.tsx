import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arabulucu Ücret Hesaplama',
  description:
    'Arabuluculuk ücretini güncel asgari tarifeye göre kolayca hesaplayın.',
  alternates: { canonical: '/ucret-hesaplama' },
};

export default function UcretHesaplamaPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-8xl py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow">Hesaplama</span>
          <h1 className="h-display mt-4 text-5xl md:text-6xl">Arabulucu Ücret Hesaplama</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">
            Uyuşmazlık türü ve tutarına göre arabuluculuk ücretini güncel asgari tarifeye uygun
            şekilde hesaplayın.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-24">
        <div className="card">
          {/* TODO: Hesaplama aracı kodu buraya yerleştirilecek. */}
          <p className="text-sm text-ink-500">
            Hesaplama aracı kısa süre içinde bu alana eklenecektir.
          </p>
        </div>
      </section>
    </>
  );
}
