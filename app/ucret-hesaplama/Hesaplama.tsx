'use client';

import { useState } from 'react';
import {
  hesapla,
  paraFormati,
  yuzdeFormati,
  UYUSMAZLIK_TURLERI,
  type HesaplamaGirdisi,
  type HesaplamaSonucu,
  type UyusmazlikTuru,
  type TuketiciOdemeTipi,
} from './hesaplamaMotoru';

const TARAF_SECENEKLERI = [
  { value: 2, label: '2 Taraf' },
  { value: 3, label: '3-5 Taraf' },
  { value: 6, label: '6-10 Taraf' },
  { value: 11, label: '11+ Taraf' },
];

export default function Hesaplama() {
  const [uyusmazlikTuru, setUyusmazlikTuru] = useState<UyusmazlikTuru>('ticari');
  const [tarafSayisi, setTarafSayisi] = useState<number>(2);
  const [anlasmaVar, setAnlasmaVar] = useState<boolean>(false);
  const [anlasmaTutariStr, setAnlasmaTutariStr] = useState<string>('');
  const [tuketiciOdemeTipi, setTuketiciOdemeTipi] = useState<TuketiciOdemeTipi>('esitOdenecek');
  const [tuketiciSayisi, setTuketiciSayisi] = useState<number>(1);
  const [saticiSayisi, setSaticiSayisi] = useState<number>(1);
  const [sonuc, setSonuc] = useState<HesaplamaSonucu | null>(null);

  const handleHesapla = () => {
    const girdi: HesaplamaGirdisi = {
      uyusmazlikTuru,
      tarafSayisi,
      anlasmaVar,
      anlasmaTutari: parseFloat(anlasmaTutariStr.replace(/[^\d.,]/g, '').replace(',', '.')) || 0,
      tuketiciOdemeTipi,
      tuketiciSayisi,
      saticiSayisi,
    };
    setSonuc(hesapla(girdi));
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        document.getElementById('sonuc-bolumu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const handleSifirla = () => {
    setUyusmazlikTuru('ticari');
    setTarafSayisi(2);
    setAnlasmaVar(false);
    setAnlasmaTutariStr('');
    setTuketiciOdemeTipi('esitOdenecek');
    setTuketiciSayisi(1);
    setSaticiSayisi(1);
    setSonuc(null);
  };

  const tuketiciOzelGoster = anlasmaVar && uyusmazlikTuru === 'tuketici';

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* FORM */}
      <div className="lg:col-span-3 space-y-6">
        <div className="card">
          <h2 className="font-display text-lg font-semibold text-ink-900">Uyuşmazlık Türü</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {UYUSMAZLIK_TURLERI.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setUyusmazlikTuru(t.id)}
                className={`border px-4 py-3 text-left text-sm transition ${
                  uyusmazlikTuru === t.id
                    ? 'border-accent-500 bg-accent-50 text-ink-900'
                    : 'border-ink-200 bg-white text-ink-700 hover:border-ink-300'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="font-display text-lg font-semibold text-ink-900">Taraf Sayısı</h2>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {TARAF_SECENEKLERI.map((s) => (
              <button
                key={s.value}
                type="button"
                onClick={() => setTarafSayisi(s.value)}
                className={`border px-4 py-3 text-sm transition ${
                  tarafSayisi === s.value
                    ? 'border-accent-500 bg-accent-50 text-ink-900'
                    : 'border-ink-200 bg-white text-ink-700 hover:border-ink-300'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="font-display text-lg font-semibold text-ink-900">Anlaşma Durumu</h2>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setAnlasmaVar(false)}
              className={`border px-4 py-3 text-sm transition ${
                !anlasmaVar
                  ? 'border-accent-500 bg-accent-50 text-ink-900'
                  : 'border-ink-200 bg-white text-ink-700 hover:border-ink-300'
              }`}
            >
              Anlaşma Yok
            </button>
            <button
              type="button"
              onClick={() => setAnlasmaVar(true)}
              className={`border px-4 py-3 text-sm transition ${
                anlasmaVar
                  ? 'border-accent-500 bg-accent-50 text-ink-900'
                  : 'border-ink-200 bg-white text-ink-700 hover:border-ink-300'
              }`}
            >
              Anlaşma Var
            </button>
          </div>

          {anlasmaVar && (
            <div className="mt-5">
              <label className="text-xs font-medium text-ink-600">
                Anlaşma Tutarı (TL) — Para ile değerlendirilemeyen uyuşmazlıklarda boş bırakın
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={anlasmaTutariStr}
                onChange={(e) => setAnlasmaTutariStr(e.target.value)}
                placeholder="Örn: 250000"
                className="mt-2 w-full border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-accent-500"
              />
            </div>
          )}
        </div>

        {tuketiciOzelGoster && (
          <div className="card">
            <h2 className="font-display text-lg font-semibold text-ink-900">Tüketici Uyuşmazlığı Detayları</h2>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setTuketiciOdemeTipi('esitOdenecek')}
                className={`border px-4 py-3 text-sm transition ${
                  tuketiciOdemeTipi === 'esitOdenecek'
                    ? 'border-accent-500 bg-accent-50 text-ink-900'
                    : 'border-ink-200 bg-white text-ink-700 hover:border-ink-300'
                }`}
              >
                Eşit Ödenecek
              </button>
              <button
                type="button"
                onClick={() => setTuketiciOdemeTipi('saticiOdeyecek')}
                className={`border px-4 py-3 text-sm transition ${
                  tuketiciOdemeTipi === 'saticiOdeyecek'
                    ? 'border-accent-500 bg-accent-50 text-ink-900'
                    : 'border-ink-200 bg-white text-ink-700 hover:border-ink-300'
                }`}
              >
                Satıcı/Sağlayıcı Ödeyecek
              </button>
            </div>

            {tuketiciOdemeTipi === 'esitOdenecek' && (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-ink-600">Satıcı/Sağlayıcı Sayısı</label>
                  <input
                    type="number"
                    min={1}
                    value={saticiSayisi}
                    onChange={(e) => setSaticiSayisi(Math.max(1, parseInt(e.target.value) || 1))}
                    className="mt-2 w-full border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-accent-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-ink-600">Tüketici Sayısı</label>
                  <input
                    type="number"
                    min={1}
                    value={tuketiciSayisi}
                    onChange={(e) => setTuketiciSayisi(Math.max(1, parseInt(e.target.value) || 1))}
                    className="mt-2 w-full border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-accent-500"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={handleHesapla} className="btn-primary">
            Hesapla
          </button>
          <button type="button" onClick={handleSifirla} className="btn-secondary">
            Sıfırla
          </button>
        </div>
      </div>

      {/* SONUÇ */}
      <div className="lg:col-span-2" id="sonuc-bolumu">
        {sonuc ? (
          <div className="space-y-5 lg:sticky lg:top-24">
            <div className="card bg-ink-900 text-white">
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">Brüt Ücret (KDV Dahil)</p>
              <p className="font-display mt-2 text-3xl font-semibold">{paraFormati(sonuc.brutUcret)}</p>
              {sonuc.detaylar.nisbiOran !== null && sonuc.detaylar.nisbiOran > 0 && (
                <p className="mt-2 text-xs text-white/60">
                  Ortalama nisbi oran: {yuzdeFormati(sonuc.detaylar.nisbiOran)}
                </p>
              )}
            </div>

            <div className="card">
              <h3 className="font-display text-base font-semibold text-ink-900">Senaryolar</h3>
              <ul className="mt-4 space-y-4 text-sm">
                {sonuc.tarafPaylar.map((p, i) => (
                  <li key={i} className="border-b border-ink-100 pb-3 last:border-0 last:pb-0">
                    <div className="font-medium text-ink-900">{p.tarafAdi}</div>
                    <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-ink-500">
                      <span>Brüt</span>
                      <span className="text-right text-ink-900">{paraFormati(p.brutTutar)}</span>
                      <span>KDV</span>
                      <span className="text-right">{paraFormati(p.kdvTutar)}</span>
                      <span>Stopaj</span>
                      <span className="text-right">{paraFormati(p.stopajTutar)}</span>
                      <span className="font-medium text-ink-700">Net Ödeme</span>
                      <span className="text-right font-medium text-ink-900">{paraFormati(p.netTutar)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="font-display text-base font-semibold text-ink-900">Açıklama</h3>
              <p className="mt-3 whitespace-pre-line text-xs leading-relaxed text-ink-500">
                {sonuc.detaylar.aciklama}
              </p>
              {sonuc.detaylar.kademeDetay && (
                <div className="mt-4 border-t border-ink-100 pt-4">
                  <p className="text-xs font-medium text-ink-700">Kademeli hesaplama:</p>
                  <p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-ink-500">
                    {sonuc.detaylar.kademeDetay}
                  </p>
                </div>
              )}
              {sonuc.detaylar.saatlikUcret !== null && (
                <div className="mt-4 border-t border-ink-100 pt-4 text-xs text-ink-500">
                  Saatlik ücret: {paraFormati(sonuc.detaylar.saatlikUcret)} ·{' '}
                  Saat sayısı: {sonuc.detaylar.saatSayisi}
                </div>
              )}
            </div>

            <p className="text-xs text-ink-400">
              * Hesaplama 1 Ocak 2026 tarihli Arabuluculuk Asgari Ücret Tarifesi'ne göre yapılmıştır.
              Sonuçlar bilgilendirme amaçlıdır; bağlayıcı değildir.
            </p>
          </div>
        ) : (
          <div className="card lg:sticky lg:top-24">
            <p className="text-sm text-ink-500">
              Bilgileri girip <span className="font-medium text-ink-900">Hesapla</span> butonuna
              tıkladığınızda sonuçlar burada görünecek.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
