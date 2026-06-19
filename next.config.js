/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Statik dışa aktarım: `npm run build` sonrası `out/` klasörü oluşur.
  // Bu klasörü herhangi bir statik sunucuya (Netlify, cPanel, GitHub Pages,
  // Vercel) doğrudan yükleyebilirsiniz.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
