import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avukatlık',
  description:
    'İstanbul Barosu kayıtlı avukat. Aile, iş, ticaret, tüketici, gayrimenkul ve icra-iflas hukuku alanlarında danışmanlık ve dava hizmetleri.',
  alternates: { canonical: '/avukatlik' },
};

const PRACTICES = [
  { t: 'Aile Hukuku', d: 'Boşanma, velayet, nafaka, mal rejimi, evlat edinme.' },
  { t: 'İş Hukuku', d: 'İşçi-işveren uyuşmazlıkları, fesih, kıdem ve ihbar tazminatı.' },
  { t: 'Ticaret Hukuku', d: 'Şirketler, sözleşmeler, ticari alacak ve şirket danışmanlığı.' },
  { t: 'Gayrimenkul Hukuku', d: 'Tapu iptali, kira, kentsel dönüşüm, kat mülkiyeti.' },
  { t: 'İcra & İflas', d: 'Alacak takibi, itirazın iptali, iflas erteleme süreçleri.' },
  { t: 'Tüketici Hukuku', d: 'Tüketici hakem heyetleri ve mahkemeleri süreçleri.' },
  { t: 'Sözleşmeler', d: 'Sözleşme hazırlama, müzakere ve risk analizi.' },
  { t: 'Miras Hukuku', d: 'Vasiyetname, mirasın paylaşımı, tenkis ve iade davaları.' },
  { t: 'KVKK & Veri Koruma', d: 'Veri sorumlusu uyumu, VERBİS, politikalar ve aydınlatma.' },
];

export default function AvukatlikPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-8xl py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow">Hizmet</span>
          <h1 className="h-display mt-4 text-5xl md:text-6xl">Avukatlık</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">
            Bireysel ve kurumsal müvekkillerimize geniş bir hukuk yelpazesinde temsil ve
            danışmanlık hizmeti sunuyoruz. Her dosyayı; titizlik, hız ve sonuç odaklılık
            ilkeleriyle yönetiyoruz.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/iletisim" className="btn-primary">Randevu Al</Link>
            <Link href="/arabuluculuk" className="btn-secondary">Arabuluculuk</Link>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRACTICES.map((p) => (
            <div key={p.t} className="card">
              <h3 className="font-display text-lg font-semibold text-ink-900">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-50/50">
        <div className="container-px mx-auto max-w-8xl section">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Neden Biz</span>
              <h2 className="h-display mt-4 text-4xl md:text-5xl">
                Hukuk birikimi, dijital iş akışı.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-500">
                Geleneksel hukuk pratiğini modern teknolojilerle birleştiriyoruz. Süreç takibi,
                belge yönetimi ve raporlamada müvekkillerimize her an şeffaf bir görünürlük sunuyoruz.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                { t: 'Şeffaf Ücretlendirme', d: 'Net ücret tarifesi ve önceden açıklanan masraf planı.' },
                { t: 'Dijital Müvekkil Paneli', d: 'Dosyanızı her an çevrimiçi takip edebilirsiniz.' },
                { t: 'Hızlı İletişim', d: 'WhatsApp, e-posta ve telefonla aynı gün içinde dönüş.' },
                { t: 'Çok Dilli Hizmet', d: 'Türkçe ve İngilizce sözleşme yönetimi.' },
              ].map((u) => (
                <li key={u.t} className="rounded-2xl border border-ink-100 bg-white p-6">
                  <h3 className="font-display text-lg font-semibold text-ink-900">{u.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{u.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
