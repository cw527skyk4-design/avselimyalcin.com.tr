import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-900 text-ink-100">
      <div className="container-px mx-auto max-w-8xl py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="font-display text-2xl font-semibold text-[#f4efe4]">Selim Yalçın</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-[0.28em] text-gold-400">
              Avukat · Arabulucu
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-300">
              Avukatlık ve Arabuluculuk hizmetleri. Güven ve uzmanlık.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">Hizmetler</h4>
            <ul className="mt-5 space-y-3 text-sm text-ink-300">
              <li><Link href="/arabuluculuk" className="transition-colors hover:text-[#f4efe4]">Arabuluculuk</Link></li>
              <li><Link href="/avukatlik" className="transition-colors hover:text-[#f4efe4]">Avukatlık</Link></li>
              <li><Link href="/ucret-hesaplama" className="transition-colors hover:text-[#f4efe4]">Ücret Hesaplama</Link></li>
              <li><Link href="/uygulamalar" className="transition-colors hover:text-[#f4efe4]">Uygulamalar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">Kurumsal</h4>
            <ul className="mt-5 space-y-3 text-sm text-ink-300">
              <li><Link href="/ozgecmis" className="transition-colors hover:text-[#f4efe4]">Özgeçmiş</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-[#f4efe4]">Blog</Link></li>
              <li><Link href="/iletisim" className="transition-colors hover:text-[#f4efe4]">İletişim</Link></li>
              <li><Link href="/iletisim" className="transition-colors hover:text-[#f4efe4]">Randevu</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">İletişim</h4>
            <ul className="mt-5 space-y-3 text-sm text-ink-300">
              <li>Cevizli Mah. Kastamonu Sok. No:27-29 D:10</li>
              <li>Kartal / İstanbul</li>
              <li><a href="mailto:avselimyalcin@gmail.com" className="transition-colors hover:text-[#f4efe4]">avselimyalcin@gmail.com</a></li>
              <li><a href="https://instagram.com/avselimyalcin" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#f4efe4]">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink-700 pt-8 text-xs text-ink-400 md:flex-row md:items-center">
          <p>© {year} Av. Arb. Selim Yalçın Avukatlık ve Arabuluculuk Bürosu. Tüm hakları saklıdır.</p>
          <p>İstanbul Barosu üyesidir. Adalet Bakanlığı kayıtlı arabulucu.</p>
        </div>
      </div>
    </footer>
  );
}
