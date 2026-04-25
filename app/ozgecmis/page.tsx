import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ozgecmis',
  description: 'Av. Arb. Selim Yalcin - egitim, mesleki deneyim, uyelikler ve uzmanlik alanlari.',
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
            Avukat ve Arabulucu
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-24">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="card lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-ink-900">Hakkımda</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-500 text-justify">
              2012 yılında Koç Üniversitesi Hukuk Fakültesi mezunu olup 2013 yılında avukatlık ruhsatını alarak meslek hayatına başladım.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-500 text-justify">
              İstanbul Barosu&apos;na 46524 sicil numarası ile kayıtlı olarak avukatlık faaliyetlerimi sürdürmekteyim.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-500 text-justify">
              2018 yılında Koç Üniversitesi Özel Hukuk Tezli Yüksek Lisans programını tamamlayarak Ticaret Hukuku alanında uzmanlaştım.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-500 text-justify">
              Mesleki kariyerim boyunca Ticaret Hukuku başta olmak üzere Aile Hukuku, Borçlar Hukuku, İcra ve İflas Hukuku ile Ceza Hukuku alanlarında aktif olarak çalışmaktayım.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-500 text-justify">
              2023 yılı itibarıyla 26722 sicil numarası ile arabuluculuk siciline kayıtlı olup arabuluculuk faaliyetleri de yürütmekteyim.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-500 text-justify">
              İleri düzeyde İngilizce ve başlangıç seviyesinde Almanca bilmekteyim.
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
              <li>Koç Üniversitesi — Özel Hukuk Tezli Yüksek Lisans (2018)</li>
              <li>Koç Üniversitesi — Hukuk Fakültesi (2012)</li>
              <li>University of Connecticut — İngilizce Dil Okulu (2006)</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-display text-lg font-semibold text-ink-900">Sertifikalar</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-500">
              <li>Ticaret Hukuku</li>
              <li>Ceza Hukuku</li>
              <li>Aile Hukuku</li>
              <li>Borçlar Hukuku</li>
              <li>İcra-İflas Hukuku</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-display text-lg font-semibold text-ink-900">Uzmanlık Alanları</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              <li>Ceza Hukuku</li>
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
            <h3 className="font-display text-lg font-semibold text-ink-900">Yayınlar</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              <li>“Anonim Şirketlerde Esas Sermaye Artırımının Dürüstlük Kuralına Aykırılık Nedeniyle İptali” (On İki Levha Yayıncılık,Nisan 2018)</li>
<li>“Türk Ticaret Kanununda Hakim Şirketin Kayba Sebebiyet Verici Talimatı/Yöneltmesi ve Bağlı Şirket Yönetim Kurulu Üyelerinin Sorumluluğu” (Istanbul Barosu Dergisi, Vol.89, No.2015/5)</li>
<li>“Usufruct Certificates” (TAD Law Review, Issue 2013/1)</li> 
<li>“Acquisition by Joint Stock Companies of Their Own Shares” (TAD Law Review, Issue 2013/1)</li> 
<li>“Mergers under the Turkish Commercial Code” (TAD Law Review, Issue 2013/1)</li>  
<li>“Are Sharebuybacks by Joint Stock Companies an Alternative to Dividend Distribution?” (10 Dailies, Volume III, Issue 11)</li>
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
