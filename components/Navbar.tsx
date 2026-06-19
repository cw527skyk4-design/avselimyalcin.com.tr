'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/ozgecmis', label: 'Özgeçmiş' },
  { href: '/arabuluculuk', label: 'Arabuluculuk' },
  { href: '/avukatlik', label: 'Avukatlık' },
  { href: '/ucret-hesaplama', label: 'Ücret Hesaplama' },
  { href: '/uygulamalar', label: 'Uygulamalar' },
  { href: '/blog', label: 'Blog' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200 bg-[#f4efe4]/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-[#f4efe4]/0'
      }`}
    >
      <nav className="container-px mx-auto flex h-20 max-w-8xl items-center justify-between">
        <Link href="/" className="flex items-center text-ink-900" aria-label="Av. Arb. Selim Yalçın">
          <Image
            src="/logo.jpg"
            alt="Av. Arb. Selim Yalçın"
            width={5110}
            height={1120}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:text-accent-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/iletisim" className="btn-primary">
            Randevu Al
          </Link>
        </div>

        <button
          aria-label="Menüyü aç"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center border border-ink-300 lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-200 bg-[#f4efe4] lg:hidden">
          <ul className="container-px mx-auto flex max-w-8xl flex-col py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 text-sm font-medium text-ink-700 hover:text-accent-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <Link href="/iletisim" onClick={() => setOpen(false)} className="btn-primary w-full">
                Randevu Al
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
