import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ana Sayfa',
  description:
    'İstanbul merkezli avukatlık ve arabuluculuk hizmetleri. Uyuşmazlık çözümünde güvenilir, etkin ve sonuç odaklı hukuki danışmanlık.',
};

const SERVICES = [
  { n: '01', t: 'Arabuluculuk', d: 'Mahkeme öncesi hızlı, gizli ve bağlayıcı çözümler.', href: '/arabuluculuk' },
  { n: '02', t: 'Avukatlık', d: 'Bireysel ve kurumsal müvekkiller için kapsamlı dava ve danışmanlık.', href: '/avukatlik' },
  { n: '03', t: 'Hukuk Teknolojileri', d: 'Arabulucu Ofis, Arabulucu Hesap ve SMM Hesaplama ile dijital iş akışları.', href: '/uygulamalar' },
  { n: '04', t: 'İş & Ticaret Hukuku', d: 'Sözleşme yönetimi, iş uyuşmazlıkları, ticari alacak ve şirket danışmanlığı.', href: '/avukatlik' },
  { n: '05', t: 'Aile Hukuku', d: 'Boşanma, velayet, nafaka ve mal rejimi davalarında temsil.', href: '/avukatlik' },
  { n: '06', t: 'Tüketici Uyuşmazlıkları', d: 'Tüketici hakemleri, tüketici mahkemeleri ve çözüm süreçleri.', href: '/avukatlik' },
];

const STEPS = [
  { n: '01', t: 'İlk Görüşme', d: 'Durumunuzu değerlendirir, yol haritasını birlikte belirleriz.' },
  { n: '02', t: 'Strateji', d: 'Hukuki ve ticari riskleri analiz ederek size özel stratejiyi kurarız.' },
  { n: '03', t: 'Çözüm', d: 'Arabuluculuk veya dava sürecinde sonuç odaklı şekilde temsil ederiz.' },
  { n: '04', t: 'Takip', d: 'Çözüm sonrası uygulama ve takip süreçlerinde de yanınızdayız.' },
];

const TRUST = [
  'İstanbul Barosu Üyesi',
  'Adalet Bakanlığı Kayıtlı Arabulucu',
  'Yüz Yüze & Online Görüşme',
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-ink-200">
        <div className="container-px mx-auto max-w-8xl py-20 md:py-24 lg:py-28">
          <div className="grid items-end gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <span className="eyebrow animate-fade-in">İstanbul · Avukatlık &amp; Arabuluculuk</span>
              <h1 className="h-display mt-7 text-6xl leading-[0.98] sm:text-7xl lg:text-[84px] animate-fade-up">
                Av. Arb.<br />Selim <span className="text-accent-600">Yalçın</span>
              </h1>
            </div>
            <div className="animate-fade-up lg:pb-3">
              <p className="text-lg leading-relaxed text-ink-600">
                Bireyler ve şirketler için modern, etkin ve sonuç odaklı hukuki danışmanlık.
                Uyuşmazlıkları mahkeme öncesi çözüme kavuşturuyor; gerektiğinde dava süreçlerinde
                yanınızda oluyoruz.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/iletisim" className="btn-primary">Ön Görüşme</Link>
                <Link href="/arabuluculuk" className="btn-secondary">Hizmetleri İncele</Link>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3 border-t border-ink-200 pt-6">
            {TRUST.map((m) => (
              <span key={m} className="flex items-center gap-2.5 text-sm font-medium text-ink-600">
                <span className="text-accent-600">◆</span>
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-px mx-auto max-w-8xl py-20 md:py-28">
        <div className="flex items-baseline justify-between gap-6 border-b border-ink-300 pb-6">
          <h2 className="h-display text-4xl md:text-5xl">Hizmet Alanları</h2>
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-600">
            06 Uzmanlık
          </span>
        </div>
        <div className="grid grid-cols-1 border-l border-ink-200 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((c) => (
            <Link
              key={c.t}
              href={c.href}
              className="group border-b border-r border-ink-200 p-9 transition-colors hover:bg-accent-50/50"
            >
              <span className="font-display text-base font-semibold text-accent-600">{c.n} —</span>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold text-ink-900">{c.t}</h3>
                <span className="text-ink-300 transition-colors group-hover:text-accent-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{c.d}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-ink-200 bg-ink-50/60">
        <div className="container-px mx-auto max-w-8xl section">
          <span className="eyebrow">Süreç</span>
          <h2 className="h-display mt-4 text-4xl md:text-5xl">Nasıl çalışıyoruz?</h2>

          <ol className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <li key={s.n} className="border-t-2 border-accent-600 pt-5">
                <span className="font-display text-sm font-semibold tracking-[0.1em] text-accent-600">{s.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink-900">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.d}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link href="/iletisim" className="btn-primary">Görüşme Talep Et</Link>
            <Link href="/blog" className="btn-secondary">Blog Yazıları</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-8xl py-24">
        <div className="relative border border-ink-300 px-8 py-20 text-center md:py-24">
          <div className="pointer-events-none absolute inset-[9px] border border-accent-600/25" />
          <h2 className="h-display mx-auto max-w-3xl text-4xl md:text-5xl">
            Hukuki sürecinize <span className="text-accent-600">bugün başlayın.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-ink-500">
            Yüz yüze ve online randevular mümkündür.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/iletisim" className="btn-primary">Randevu Al</Link>
            <a href="mailto:avselimyalcin@gmail.com" className="btn-secondary">
              avselimyalcin@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
