import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GA_ID = 'G-GKS4N5KP9J';

const SITE_URL = 'https://avselimyalcin.com.tr';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Av. Arb. Selim Yalçın | İstanbul Avukatlık ve Arabuluculuk Hizmetleri',
    template: '%s | Av. Arb. Selim Yalçın',
  },
  description:
    'İstanbul merkezli avukatlık ve arabuluculuk hizmetleri. Uyuşmazlık çözümünde güvenilir, etkin ve sonuç odaklı hukuki danışmanlık.',
  keywords: [
    'İstanbul avukat',
    'arabulucu',
    'arabuluculuk',
    'hukuk bürosu',
    'ticari arabuluculuk',
    'iş hukuku',
    'aile hukuku',
    'tüketici uyuşmazlıkları',
  ],
  authors: [{ name: 'Av. Arb. Selim Yalçın' }],
  creator: 'Av. Arb. Selim Yalçın',
  publisher: 'Av. Arb. Selim Yalçın',
  alternates: {
    canonical: SITE_URL,
    languages: { 'tr-TR': SITE_URL },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    siteName: 'Av. Arb. Selim Yalçın',
    title: 'Av. Arb. Selim Yalçın | İstanbul Avukatlık ve Arabuluculuk Hizmetleri',
    description:
      'İstanbul merkezli avukatlık ve arabuluculuk hizmetleri. Güvenilir, etkin ve sonuç odaklı hukuki danışmanlık.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Av. Arb. Selim Yalçın | İstanbul',
    description: 'Avukatlık ve arabuluculuk hizmetleri.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'legal',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Av. Arb. Selim Yalçın Avukatlık ve Arabuluculuk Bürosu',
    image: `${SITE_URL}/og.jpg`,
    url: SITE_URL,
    email: 'avselimyalcin@gmail.com',
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cevizli Mah. Kastamonu Sok. No:27-29 D:10',
      addressLocality: 'Kartal',
      addressRegion: 'İstanbul',
      addressCountry: 'TR',
    },
    areaServed: 'TR',
    sameAs: ['https://instagram.com/avselimyalcin'],
  };

  return (
    <html lang="tr">
      <body className="min-h-screen bg-white text-ink-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
