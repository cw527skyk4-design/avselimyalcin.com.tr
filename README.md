# Av. Arb. Selim Yalçın — Web Sitesi

İstanbul merkezli avukatlık ve arabuluculuk web sitesi. **Next.js 14 (App Router)** + **Tailwind CSS**.
Tasarım: **Açık Prestij** — sıcak fildişi zemin, bordo (#7a2630) vurgu, altın detaylar, Spectral (serif başlık) + Mulish (gövde) tipografisi.

---

## Hızlı Başlangıç (yerel)

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

---

## Yayına Alma (Deploy)

Site **statik dışa aktarıma** ayarlıdır (`next.config.js` → `output: 'export'`).

### Seçenek 1 — Vercel / Netlify (önerilen, otomatik)
1. Bu klasörü bir GitHub deposuna yükleyin.
2. Vercel veya Netlify'da "Import / New Project" ile depoyu bağlayın.
3. Otomatik build alır ve yayınlar. Ek ayar gerekmez.

### Seçenek 2 — Herhangi bir statik sunucu (cPanel, hosting, GitHub Pages)
```bash
npm install
npm run build
```
Build sonrası oluşan **`out/`** klasörünün içeriğini (tüm dosyalar) sunucunuzun
`public_html` / kök dizinine yükleyin. Build adımı gerektirmez, saf HTML/CSS/JS'tir.

---

## Tasarımı Özelleştirme

| Ne | Nerede |
|----|--------|
| Renkler (bordo, altın, ink) | `tailwind.config.ts` → `theme.extend.colors` |
| Fontlar | `app/layout.tsx` (Spectral / Mulish) |
| Buton / kart / başlık stilleri | `app/globals.css` → `@layer components` |
| Menü / Footer | `components/Navbar.tsx`, `components/Footer.tsx` |
| Sayfa içerikleri | `app/**/page.tsx` |

---

## Sayfalar
`/` · `/ozgecmis` · `/arabuluculuk` · `/avukatlik` · `/ucret-hesaplama` ·
`/uygulamalar` (+ alt sayfalar) · `/blog` · `/iletisim` · 404

> Not: Google Analytics ölçüm kimliği `app/layout.tsx` içindedir (`GA_ID`).
> İletişim formu `mailto:` ile çalışır; sunucu tarafı gerektirmez.
