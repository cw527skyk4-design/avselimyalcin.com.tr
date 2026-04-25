import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Özgeçmiş',
  description:
    'Av. Arb. Selim Yalçın — eğitim, mesleki deneyim, üyelikler ve uzmanlık alanları.',
  alternates: { canonical: '/ozgecmis' },
};

export default function OzgecmisPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-8xl py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow">Özgeçmiş</span>
          <h1 className="h-display mt-4 text-5xl md:text-6xl">Av. Arb. Selim Yalçın</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">
            İstanbul Barosu üyesi avukat ve Adalet Bakanlığı kayıtlı arabulucu.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-24">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="card lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-ink-900">Hakkımda</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-500">
              {/* TODO: Buraya kendi hakkınızda kısa biyografi metnini ekleyin. */}
              Bu alan kısa süre içinde güncellenecektir.
            </p>
          </div>

          <div className="card">
            <h3 className="font-display text-lg font-semibold text-ink-900">Üyelikler</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              <li>İstanbul Barosu</li>
              <li>Adalet Bakanlığı Arabuluculuk Daire Başkanlığı</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-display text-lg font-semibold text-ink-900">Eğitim</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-500">
              {/* TODO: Eğitim bilgilerinizi ekleyin (Üniversite, Fakülte, Yıl) */}
              <li>—</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-display text-lg font-semibold text-ink-900">Mesleki Deneyim</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-500">
              {/* TODO: Mesleki deneyiminizi ekleyin */}
              <li>—</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-display text-lg font-semibold text-ink-900">Uzmanlık Alanları</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              <li>Aile Hukuku</li>
              <li>İş Hukuku</li>
              <li>Ticaret Hukuku</li>
              <li>Tüketici Hukuku</li>
              <li>Gayrimenkul Hukuku</li>
              <li>İcra ve İflas Hukuku</li>
              <li>Arabuluculuk</li>
            </ul>
          </div>

          <div className="card lg:col-span-3">
            <h3 className="font-display text-lg font-semibold text-ink-900">Yayınlar & Sertifikalar</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              {/* TODO: Yayın ve sertifikalarınızı ekleyin */}
              <li>—</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link href="/iletisim" className="btn-primary">İletişime Geç</Link>
          <Link href="/arabuluculuk" className="btn-secondary">Hizmetleri İncele</Link>
        </div>
      </section>
    </>
  );
}
