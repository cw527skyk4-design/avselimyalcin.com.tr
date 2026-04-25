import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ana Sayfa',
  description:
    'İstanbul merkezli avukatlık ve arabuluculuk hizmetleri. Uyuşmazlık çözümünde güvenilir, etkin ve sonuç odaklı hukuki danışmanlık.',
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent-50/40 via-white to-white" />
        <div className="container-px mx-auto max-w-8xl py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow animate-fade-in">İstanbul · Avukatlık & Arabuluculuk</span>
            <h1 className="h-display mt-6 text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-[88px] animate-fade-up">
              Av. Arb. <span className="text-accent-600">Selim Yalçın</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-500 animate-fade-up">
              Bireyler ve şirketler için modern, etkin ve sonuç odaklı hukuki danışmanlık. Uyuşmazlıkları
              mahkeme öncesi çözüme kavuşturuyor; gerektiğinde dava süreçlerinde yanınızda oluyoruz.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up">
              <Link href="/iletisim" className="btn-primary">Ön Görüşme</Link>
              <Link href="/arabuluculuk" className="btn-secondary">Hizmetleri İncele</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container-px mx-auto max-w-8xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Hizmet Alanları</span>
              <h2 className="h-display mt-4 text-4xl md:text-5xl">
                Her uyuşmazlığa göre özelleştirilmiş yaklaşım.
              </h2>
            </div>
            <p className="max-w-md text-base text-ink-500">
              Aile hukukundan ticari uyuşmazlıklara, iş hukukundan tüketici hukukuna geniş bir yelpazede
              uzman destek sağlıyoruz.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: 'Arabuluculuk',
                d: 'Mahkeme öncesi hızlı, gizli ve bağlayıcı çözümler.',
                href: '/arabuluculuk',
              },
              {
                t: 'Avukatlık',
                d: 'Bireysel ve kurumsal müvekkiller için kapsamlı dava ve danışmanlık hizmeti.',
                href: '/avukatlik',
              },
              {
                t: 'Hukuk Teknolojileri',
                d: 'Arabulucu Ofis, Arabulucu Hesap ve SMM Hesaplama ile dijital iş akışları.',
                href: '/uygulamalar',
              },
              {
                t: 'İş & Ticaret Hukuku',
                d: 'Sözleşme yönetimi, iş uyuşmazlıkları, ticari alacak takibi ve şirket danışmanlığı.',
                href: '/avukatlik',
              },
              {
                t: 'Aile Hukuku',
                d: 'Boşanma, velayet, nafaka ve mal rejimi davalarında temsil.',
                href: '/avukatlik',
              },
              {
                t: 'Tüketici Uyuşmazlıkları',
                d: 'Tüketici hakemleri, tüketici mahkemeleri ve uyuşmazlık çözüm süreçleri.',
                href: '/avukatlik',
              },
            ].map((c) => (
              <Link key={c.t} href={c.href} className="card group">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-ink-900">{c.t}</h3>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-50 text-ink-500 transition group-hover:bg-accent-50 group-hover:text-accent-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">{c.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-ink-50/50">
        <div className="container-px mx-auto max-w-8xl">
          <div className="max-w-2xl">
            <span className="eyebrow">Süreç</span>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">
              Nasıl çalışıyoruz?
            </h2>
          </div>

          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: '01', t: 'İlk Görüşme', d: 'Durumunuzu değerlendirir, yol haritasını birlikte belirleriz.' },
              { n: '02', t: 'Strateji', d: 'Hukuki ve ticari riskleri analiz ederek size özel stratejiyi oluştururuz.' },
              { n: '03', t: 'Çözüm', d: 'Arabuluculuk veya dava sürecinde sonuç odaklı şekilde sizi temsil ederiz.' },
              { n: '04', t: 'Takip', d: 'Çözüm sonrası uygulama ve takip süreçlerinde de yanınızdayız.' },
            ].map((s) => (
              <li key={s.n} className="rounded-2xl border border-ink-100 bg-white p-6">
                <span className="font-display text-2xl font-semibold text-accent-600">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.d}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/iletisim" className="btn-primary">Görüşme Talep Et</Link>
            <Link href="/blog" className="btn-secondary">Blog Yazıları</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-8xl pb-24 pt-24">
        <div className="overflow-hidden rounded-3xl bg-ink-900 px-10 py-20 text-center md:py-24">
          <h2 className="h-display mx-auto max-w-3xl text-4xl text-white md:text-5xl">
            Hukuki sürecinize bugün başlayın.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-ink-300">
            Yüzyüze ve online randevular mümkündür.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/iletisim" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-ink-900 transition hover:scale-[1.02]">
              Randevu Al
            </Link>
            <a href="mailto:avselimyalcin@gmail.com" className="inline-flex items-center justify-center rounded-full border border-ink-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-ink-800">
              avselimyalcin@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
