import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-100 bg-ink-50/40">
      <div className="container-px mx-auto max-w-8xl py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Image
              src="/logo.jpg"
              alt="Av. Arb. Selim Yalçın"
              width={5110}
              height={1120}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              Avukatlık ve Arabuluculuk hizmetleri. Güven ve uzmanlık.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-ink-900">Hizmetler</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-500">
              <li><Link href="/arabuluculuk" className="hover:text-ink-900">Arabuluculuk</Link></li>
              <li><Link href="/avukatlik" className="hover:text-ink-900">Avukatlık</Link></li>
              <li><Link href="/ucret-hesaplama" className="hover:text-ink-900">Ücret Hesaplama</Link></li>
              <li><Link href="/uygulamalar" className="hover:text-ink-900">Uygulamalar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-ink-900">Kurumsal</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-500">
              <li><Link href="/ozgecmis" className="hover:text-ink-900">Özgeçmiş</Link></li>
              <li><Link href="/blog" className="hover:text-ink-900">Blog</Link></li>
              <li><Link href="/iletisim" className="hover:text-ink-900">İletişim</Link></li>
              <li><Link href="/iletisim" className="hover:text-ink-900">Randevu</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-ink-900">İletişim</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-500">
              <li>Cevizli Mah. Kastamonu Sok. No:27-29 D:10</li>
              <li>Kartal / İstanbul</li>
              <li><a href="mailto:avselimyalcin@gmail.com" className="hover:text-ink-900">avselimyalcin@gmail.com</a></li>
              <li><a href="https://instagram.com/avselimyalcin" target="_blank" rel="noopener noreferrer" className="hover:text-ink-900">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink-100 pt-8 text-xs text-ink-400 md:flex-row md:items-center">
          <p>© {year} Av. Arb. Selim Yalçın Avukatlık ve Arabuluculuk Bürosu. Tüm hakları saklıdır.</p>
          <p>İstanbul Barosu üyesidir. Adalet Bakanlığı kayıtlı arabulucu.</p>
        </div>
      </div>
    </footer>
  );
}
