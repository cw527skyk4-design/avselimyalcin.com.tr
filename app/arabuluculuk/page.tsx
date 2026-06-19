import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arabuluculuk',
  description:
    'Adalet Bakanlığı sicilli arabulucu. Ticari, iş, tüketici ve aile uyuşmazlıklarında hızlı, gizli ve bağlayıcı çözüm.',
  alternates: { canonical: '/arabuluculuk' },
};

const FIELDS = [
  {
    t: 'Ticari Uyuşmazlıklar',
    d: 'Şirketler arası alacak, sözleşme ve ticari iş uyuşmazlıklarında dava şartı arabuluculuk.',
  },
  {
    t: 'İş Hukuku',
    d: 'İşçi-işveren arasındaki kıdem, ihbar, fazla mesai ve fesih uyuşmazlıkları.',
  },
  {
    t: 'Tüketici Uyuşmazlıkları',
    d: 'Tüketici işlemlerinden kaynaklanan uyuşmazlıklarda dava şartı arabuluculuk.',
  },
  {
    t: 'Aile Hukuku',
    d: 'Aile içi uyuşmazlıklarda gönüllü arabuluculuk ile uzlaşı temelli çözüm.',
  },
  {
    t: 'Kira Uyuşmazlıkları',
    d: 'Kiracı-kiraya veren arasında ortaya çıkan uyuşmazlıklarda dava şartı arabuluculuk.',
  },
  {
    t: 'Komşuluk Hukuku',
    d: 'Ortak yaşam alanlarından doğan uyuşmazlıklarda hızlı çözüm.',
  },
];

export default function ArabuluculukPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-8xl py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow">Hizmet</span>
          <h1 className="h-display mt-4 text-5xl md:text-6xl">Arabuluculuk</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">
            Arabuluculuk; uyuşmazlıkların mahkemeye gitmeden, tarafların kendi iradeleriyle ve
            bağımsız bir uzman eşliğinde çözüldüğü modern bir uyuşmazlık çözüm yöntemidir.
            Adalet Bakanlığı siciline kayıtlı arabulucu olarak süreçlerinizi profesyonel bir
            şekilde yönetiyoruz.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/iletisim" className="btn-primary">Görüşme Talep Et</Link>
            <a href="mailto:avselimyalcin@gmail.com" className="btn-secondary">E-posta Gönder</a>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { k: 'Hızlı', d: 'Çoğu uyuşmazlık 3–4 hafta içinde sonuçlanır.' },
            { k: 'Gizli', d: 'Tüm görüşmeler yasal güvence altında gizlidir.' },
            { k: 'Bağlayıcı', d: 'Anlaşma belgesi mahkeme ilamı niteliğindedir.' },
          ].map((c) => (
            <div key={c.k} className="card">
              <h3 className="font-display text-xl font-semibold text-ink-900">{c.k}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-50/50">
        <div className="container-px mx-auto max-w-8xl section">
          <div className="max-w-2xl">
            <span className="eyebrow">Çalışma Alanları</span>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">
              Hangi uyuşmazlıklarda arabuluculuk?
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FIELDS.map((f) => (
              <div key={f.t} className="card">
                <h3 className="font-display text-lg font-semibold text-ink-900">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl section">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="eyebrow">Süreç</span>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">Nasıl ilerliyor?</h2>
            <p className="mt-6 text-base leading-relaxed text-ink-500">
              Süreç şeffaf, anlaşılır ve hızlıdır. Tarafları dinler, müzakereyi yönetir ve
              her iki taraf için sürdürülebilir bir çözümü hedefleriz.
            </p>
          </div>
          <ol className="space-y-4">
            {[
              { n: '01', t: 'Başvuru', d: 'Arabuluculuk merkezine veya doğrudan büromuza başvuru.' },
              { n: '02', t: 'Görüşme', d: 'Tarafların ortak ya da ayrı oturumlarla dinlenmesi.' },
              { n: '03', t: 'Müzakere', d: 'Çıkar temelli müzakere ile ortak çözümün aranması.' },
              { n: '04', t: 'Anlaşma', d: 'Anlaşma belgesinin düzenlenmesi ve icra edilebilirlik şerhi.' },
            ].map((s) => (
              <li key={s.n} className="border border-ink-100 bg-white p-6">
                <div className="flex items-start gap-5">
                  <span className="font-display text-2xl font-semibold text-accent-600">{s.n}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink-900">{s.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{s.d}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
