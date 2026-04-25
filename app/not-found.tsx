import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-px mx-auto flex min-h-[60vh] max-w-8xl flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">404</span>
      <h1 className="h-display mt-4 text-5xl md:text-6xl">Sayfa bulunamadı</h1>
      <p className="mt-4 max-w-md text-ink-500">
        Aradığınız sayfa taşınmış veya silinmiş olabilir.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Ana Sayfaya Dön
      </Link>
    </section>
  );
}
