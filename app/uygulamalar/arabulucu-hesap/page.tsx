import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arabulucu Hesap',
  description:
    'Arabuluculuk ücret hesaplaması, asgari tarife uygulamaları ve fatura/serbest meslek makbuzu desteği.',
  alternates: { canonical: '/uygulamalar/arabulucu-hesap' },
};

export default function ArabulucuHesapPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-8xl py-20 md:py-28">
        <div className="max-w-3xl">
          <Link href="/uygulamalar" className="text-sm text-ink-500 hover:text-ink-900">
            ← Uygulamalar
          </Link>
          <span className="eyebrow mt-6 block">Mali İşler</span>
          <h1 className="h-display mt-4 text-5xl md:text-6xl">Arabulucu Hesap</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">
            Arabuluculuk asgari ücret tarifesine göre dosyalarınızın ücretlendirmesini saniyeler
            içinde hesaplayın. Anlaşma tutarına göre kademeli oran hesaplamaları, KDV ve stopaj
            tek bir ekranda.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: 'Tarife Hesaplaması', d: 'Güncel asgari ücret tarifesine göre otomatik hesap.' },
            { t: 'Anlaşmalı / Anlaşmasız', d: 'Süreç sonucuna göre farklı hesaplama akışları.' },
            { t: 'KDV & Stopaj', d: 'Vergi yükümlülüklerini ihmal etmeden net rakamı görün.' },
            { t: 'Belge Çıktısı', d: 'Hesap dökümünü PDF olarak taraflarla paylaşın.' },
            { t: 'Çoklu Dosya', d: 'Aynı anda birden fazla dosya için hesaplama yapın.' },
            { t: 'Geçmiş Kayıtlar', d: 'Önceki hesaplamaları sakla, kolayca yeniden kullan.' },
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
          <h2 className="h-display text-3xl text-white md:text-4xl">Hesaplamayı kolaylaştırın.</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-300">Arabulucu Hesap için demo talep edin.</p>
          <Link href="/iletisim" className="mt-8 inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-medium text-ink-900 hover:scale-[1.02]">
            Demo Talep Et
          </Link>
        </div>
      </section>
    </>
  );
}
