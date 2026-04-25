import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arabulucu Ofis',
  description:
    'Arabuluculuk dosyalarınızı uçtan uca yönetin: belge şablonları, oturum takvimi, taraf yönetimi ve raporlama.',
  alternates: { canonical: '/uygulamalar/arabulucu-ofis' },
};

export default function ArabulucuOfisPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-8xl py-20 md:py-28">
        <div className="max-w-3xl">
          <Link href="/uygulamalar" className="text-sm text-ink-500 hover:text-ink-900">
            ← Uygulamalar
          </Link>
          <span className="eyebrow mt-6 block">Dosya Yönetimi</span>
          <h1 className="h-display mt-4 text-5xl md:text-6xl">Arabulucu Ofis</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">
            Arabuluculuk dosyalarınızı tek bir panelde yönetin. Davet mektubu, ilk oturum tutanağı,
            son tutanak şablonları; oturum takvimi ve taraf bilgileri uçtan uca dijitalleşir.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: 'Otomatik Şablonlar', d: 'Davet mektubu, ilk oturum ve son tutanak şablonlarının otomatik üretimi.' },
            { t: 'Oturum Takvimi', d: 'Oturumları planla, hatırlatıcılar oluştur, taraflara otomatik bildirim gönder.' },
            { t: 'Taraf Yönetimi', d: 'Tarafların kimlik, vekalet ve iletişim bilgilerini güvenli bir yapıda sakla.' },
            { t: 'UDF & PDF Çıktı', d: 'UYAP uyumlu UDF ve standart PDF formatlarında belge çıktısı.' },
            { t: 'Raporlama', d: 'Dönemsel anlaşma oranı, dosya yükü ve gelir raporlarını incele.' },
            { t: 'Güvenlik', d: 'KVKK uyumlu veri saklama ve uçtan uca şifrelenmiş yedekleme.' },
          ].map((f) => (
            <div key={f.t} className="card">
              <h3 className="font-display text-lg font-semibold text-ink-900">{f.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-24">
        <div className="rounded-3xl bg-ink-900 px-10 py-16 text-center">
          <h2 className="h-display text-3xl text-white md:text-4xl">Arabulucu Ofis'i deneyin.</h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-300">Demo talebi ve fiyatlandırma için bize ulaşın.</p>
          <Link href="/iletisim" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-ink-900 hover:scale-[1.02]">
            Demo Talep Et
          </Link>
        </div>
      </section>
    </>
  );
}
