import type { MetadataRoute } from 'next';

const SITE_URL = 'https://avselimyalcin.com.tr';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/ozgecmis',
    '/arabuluculuk',
    '/avukatlik',
    '/arabulucu-ucret-hesaplama',
    '/uygulamalar',
    '/uygulamalar/arabulucu-ofis',
    '/uygulamalar/arabulucu-hesap',
    '/uygulamalar/smm-hesap',
    '/blog',
    '/iletisim',
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.7,
  }));
}
