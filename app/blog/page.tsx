import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Hukuk, arabuluculuk ve uyuşmazlık çözümü üzerine güncel yazılar ve rehberler.',
  alternates: { canonical: '/blog' },
};

const POSTS = [
  {
    slug: 'arabuluculuk-nedir',
    title: 'Arabuluculuk Nedir, Nasıl İşler?',
    excerpt:
      'Arabuluculuk sürecinin temel ilkeleri, dava şartı arabuluculuk kapsamı ve süreç adımları.',
    date: '2026-04-10',
    cat: 'Arabuluculuk',
  },
  {
    slug: 'is-hukukunda-fesih',
    title: 'İş Hukukunda Geçerli ve Haklı Fesih Ayrımı',
    excerpt:
      'İşveren ve işçi açısından fesih türleri, ihbar süreleri ve tazminat hakları.',
    date: '2026-03-22',
    cat: 'İş Hukuku',
  },
  {
    slug: 'ticari-uyusmazlik',
    title: 'Ticari Uyuşmazlıklarda Arabuluculuk',
    excerpt:
      'Şirketler için arabuluculuğun stratejik avantajları, maliyet ve süre üzerindeki etkileri.',
    date: '2026-03-05',
    cat: 'Ticaret Hukuku',
  },
  {
    slug: 'kvkk-uyumu',
    title: 'KVKK Uyumu için Şirket Rehberi',
    excerpt:
      'Veri sorumlusu yükümlülükleri, VERBİS kayıt süreçleri ve aydınlatma yükümlülüğü.',
    date: '2026-02-12',
    cat: 'KVKK',
  },
  {
    slug: 'kira-uyusmazliklari',
    title: 'Kira Uyuşmazlıklarında Yeni Dönem',
    excerpt:
      'Kiracı ve kiraya veren açısından zorunlu arabuluculuk uygulaması ve süreç yönetimi.',
    date: '2026-01-28',
    cat: 'Gayrimenkul',
  },
  {
    slug: 'aile-hukuku-bosanma',
    title: 'Boşanma Davalarında Bilmeniz Gerekenler',
    excerpt:
      'Anlaşmalı ve çekişmeli boşanma süreçleri, velayet ve mal rejimi konuları.',
    date: '2026-01-08',
    cat: 'Aile Hukuku',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-8xl py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow">Blog</span>
          <h1 className="h-display mt-4 text-5xl md:text-6xl">Yazılar ve Rehberler</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-500">
            Hukuk, arabuluculuk ve uyuşmazlık çözümü üzerine güncel yazılar ve rehberler.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-8xl pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.slug} className="card group flex h-full flex-col">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent-600">{p.cat}</span>
              <h2 className="mt-4 font-display text-xl font-semibold text-ink-900 group-hover:text-accent-700">
                {p.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{p.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-ink-400">
                <time dateTime={p.date}>
                  {new Date(p.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <Link href={`/blog`} className="text-ink-700 hover:text-ink-900">
                  Devamını oku →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
