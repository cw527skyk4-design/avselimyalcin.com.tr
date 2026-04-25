# Av. Arb. — İstanbul Avukatlık & Arabuluculuk

Next.js 14 (App Router) + Tailwind CSS ile geliştirilmiş, SEO optimize, hızlı yüklenen kurumsal web sitesi.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Yapı

- `app/` — App Router sayfaları (Ana Sayfa, Arabuluculuk, Avukatlık, Uygulamalar, Blog, İletişim)
- `components/` — Navbar, Footer, WhatsAppButton
- `app/sitemap.ts`, `app/robots.ts` — SEO

## Yapılandırma

- `app/layout.tsx` — Site URL, telefon, adres, JSON-LD `LegalService` şeması
- `components/WhatsAppButton.tsx` — WhatsApp numarası
- `tailwind.config.ts` — Renk paleti

## Build

```bash
npm run build
npm start
```
