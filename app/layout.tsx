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
    default: 'Av. Arb. Selim YalÃ§Ä±n | Ä°stanbul AvukatlÄ±k ve Arabuluculuk Hizmetleri',
    template: '%s | Av. Arb. Selim YalÃ§Ä±n',
  },
  description:
    'Ä°stanbul merkezli avukatlÄ±k ve arabuluculuk hizmetleri. UyuÅŸmazlÄ±k Ã§Ã¶zÃ¼mÃ¼nde gÃ¼venilir, etkin ve sonuÃ§ odaklÄ± hukuki danÄ±ÅŸmanlÄ±k.',
  keywords: [
    'Ä°stanbul avukat',
    'arabulucu',
    'arabuluculuk',
    'hukuk bÃ¼rosu',
    'ticari arabuluculuk',
    'iÅŸ hukuku',
    'aile hukuku',
    'tÃ¼ketici uyuÅŸmazlÄ±klarÄ±',
  ],
  authors: [{ name: 'Av. Arb. Selim YalÃ§Ä±n' }],
  creator: 'Av. Arb. Selim YalÃ§Ä±n',
  publisher: 'Av. Arb. Selim YalÃ§Ä±n',
  alternates: {
    canonical: SITE_URL,
    languages: { 'tr-TR': SITE_URL },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    siteName: 'Av. Arb. Selim YalÃ§Ä±n',
    title: 'Av. Arb. Selim YalÃ§Ä±n | Ä°stanbul AvukatlÄ±k ve Arabuluculuk Hizmetleri',
    description:
      'Ä°stanbul merkezli avukatlÄ±k ve arabuluculuk hizmetleri. GÃ¼venilir, etkin ve sonuÃ§ odaklÄ± hukuki danÄ±ÅŸmanlÄ±k.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Av. Arb. Selim YalÃ§Ä±n | Ä°stanbul',
    description: 'AvukatlÄ±k ve arabuluculuk hizmetleri.',
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
    name: 'Av. Arb. Selim YalÃ§Ä±n AvukatlÄ±k ve Arabuluculuk BÃ¼rosu',
    image: `${SITE_URL}/og.jpg`,
    url: SITE_URL,
    email: 'avselimyalcin@gmail.com',
    priceRange: 'â‚ºâ‚º',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cevizli Mah. Kastamonu Sok. No:27-29 D:10',
      addressLocality: 'Kartal',
      addressRegion: 'Ä°stanbul',
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
