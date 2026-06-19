import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SMM Hesap',
  description:
    'Serbest meslek makbuzu hazırlığı, stopaj ve KDV hesaplamaları ile gelir-gider raporları.',
  alternates: { canonical: '/uygulamalar/smm-hesap' },
};

export default function SMMHesapPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-8xl py-20 md:py-28">
        <div className="max-w-3xl">
          <Link href="/uygulamalar" className="text-sm text-ink-500 hover:text-ink-900">
            ← Uygulamalar
          </Link>
          <span className="eyebrow mt-6 block">Muhasebe</span>
          <h1 className="h-display mt-4 text-5xl md:text-6xl">SMM Hesap</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">
            Serbest meslek makbuzunuzu doğru ve hızlı bir şekilde hazırlayın. Brüt-net çevrim,
            KDV ve stopaj hesabı, müşteri kayıtları ve dönemsel raporlar tek bir araçta.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: 'Brüt / Net Çevrim', d: 'Brütten nete, netten brüte saniyeler içinde dönüşüm.' },
            { t: 'KDV & Stopaj', d: 'Güncel oranlarla otomatik hesaplama.' },
            { t: 'Müşteri Kayıtları', d: 'Müvekkil bilgilerini güvenli bir biçimde sakla.' },
            { t: 'Makbuz Çıktısı', d: 'Profesyonel görünümlü PDF makbuz çıktısı.' },
            { t: 'Aylık / Yıllık Rapor', d: 'Gelir-gider tabloları ve dönem karşılaştırmaları.' },
            { t: 'E-SMM Uyumlu', d: 'E-SMM sistemiyle uyumlu veri yapısı.' },
          ].map((f) => (
            <div key={f.t} className="card">
              <h3 className="font-display text-lg font-semibold text-ink-900">{f.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-24">
        <div className="bg-ink-900 px-10 py-16 text-center">
          <h2 className="h-display text-3xl text-white md:text-4xl">SMM Hesap'ı keşfedin.</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-300">Demo talep formu için iletişime geçin.</p>
          <Link href="/iletisim" className="mt-8 inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-medium text-ink-900 hover:scale-[1.02]">
            Demo Talep Et
          </Link>
        </div>
      </section>
    </>
  );
}
