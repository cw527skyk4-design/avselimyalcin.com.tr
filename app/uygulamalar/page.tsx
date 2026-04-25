import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uygulamalar',
  description:
    'Arabulucu Ofis, Arabulucu Hesap ve SMM Hesap. Hukuk profesyonelleri için modern dijital çözümler.',
  alternates: { canonical: '/uygulamalar' },
};

const APPS = [
  {
    slug: 'arabulucu-ofis',
    t: 'Arabulucu Ofis',
    d: 'Arabuluculuk dosyalarınızı uçtan uca yönetin. Belge şablonları, oturum takvimi, taraf yönetimi ve raporlama.',
    tag: 'Dosya Yönetimi',
  },
  {
    slug: 'arabulucu-hesap',
    t: 'Arabulucu Hesap',
    d: 'Arabuluculuk ücret hesaplaması, asgari tarife uygulamaları ve fatura/serbest meslek makbuzu desteği.',
    tag: 'Mali İşler',
  },
  {
    slug: 'smm-hesap',
    t: 'SMM Hesap',
    d: 'Serbest meslek makbuzu hazırlığı, stopaj ve KDV hesaplamaları ile gelir-gider raporları.',
    tag: 'Muhasebe',
  },
];

export default function UygulamalarPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-8xl py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow">Hukuk Teknolojileri</span>
          <h1 className="h-display mt-4 text-5xl md:text-6xl">Uygulamalar</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">
            Hukuk pratiğinin günlük operasyonlarını sadeleştiren araçlar geliştiriyoruz.
            Arabulucular, avukatlar ve hukuk büroları için pratik, hızlı ve güvenli çözümler.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {APPS.map((app) => (
            <Link key={app.slug} href={`/uygulamalar/${app.slug}`} className="card group">
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-medium text-accent-700">
                  {app.tag}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-50 text-ink-500 transition group-hover:bg-accent-50 group-hover:text-accent-600">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">{app.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{app.d}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink-50/50">
        <div className="container-px mx-auto max-w-8xl section text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="h-display text-4xl md:text-5xl">
              İhtiyacınıza özel çözüm geliştirelim.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-500">
              Hukuk büronuzun süreçlerine özel uygulamalar ve otomasyonlar için bizimle iletişime geçin.
            </p>
            <Link href="/iletisim" className="btn-primary mt-8">İletişime Geç</Link>
          </div>
        </div>
      </section>
    </>
  );
}
