import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    'İstanbul ofisimize randevu alın veya e-posta üzerinden bizimle iletişime geçin.',
  alternates: { canonical: '/iletisim' },
};

export default function IletisimPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-8xl py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow">İletişim</span>
          <h1 className="h-display mt-4 text-5xl md:text-6xl">Bize Ulaşın</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">
            Hukuki sorununuz için ücretsiz ön görüşme talep edebilirsiniz. Aynı gün dönüş yapıyoruz.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-24">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <h3 className="font-display text-lg font-semibold text-ink-900">Ofis</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                Cevizli Mah. Kastamonu Sok. No:27-29 D:10<br />
                Kartal / İstanbul
              </p>
            </div>
            <div className="card">
              <h3 className="font-display text-lg font-semibold text-ink-900">E-posta</h3>
              <a href="mailto:avselimyalcin@gmail.com" className="mt-3 block text-sm text-ink-700 hover:text-ink-900">
                avselimyalcin@gmail.com
              </a>
            </div>
            <div className="card">
              <h3 className="font-display text-lg font-semibold text-ink-900">Instagram</h3>
              <a href="https://instagram.com/avselimyalcin" target="_blank" rel="noopener noreferrer" className="mt-3 block text-sm text-ink-700 hover:text-ink-900">
                @avselimyalcin
              </a>
            </div>
            <div className="card">
              <h3 className="font-display text-lg font-semibold text-ink-900">Çalışma Saatleri</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                Pazartesi – Cuma · 09:00 – 18:30<br />
                Cumartesi · Randevu ile
              </p>
            </div>
          </div>

          <form
            className="lg:col-span-3 card"
            action="mailto:avselimyalcin@gmail.com"
            method="post"
            encType="text/plain"
          >
            <h2 className="font-display text-2xl font-semibold text-ink-900">Randevu Talep Formu</h2>
            <p className="mt-2 text-sm text-ink-500">Bilgileriniz gizli tutulur.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-ink-600">Ad Soyad</label>
                <input
                  required
                  name="ad"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-accent-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-ink-600">Telefon</label>
                <input
                  required
                  name="telefon"
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-accent-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-ink-600">E-posta</label>
                <input
                  required
                  name="eposta"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-accent-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-ink-600">Konu</label>
                <select
                  name="konu"
                  className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-accent-500"
                >
                  <option>Arabuluculuk</option>
                  <option>Avukatlık</option>
                  <option>Uygulamalar</option>
                  <option>Diğer</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-ink-600">Mesajınız</label>
                <textarea
                  required
                  name="mesaj"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-accent-500"
                />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-3">
              <p className="text-xs text-ink-400">
                Form gönderiminde KVKK kapsamında verileriniz işlenir.
              </p>
              <button type="submit" className="btn-primary">
                Gönder
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
