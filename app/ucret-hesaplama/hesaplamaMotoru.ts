// Arabuluculuk Ücret Hesaplama Motoru
// 1 Ocak 2026 tarihli asgari tarifeye göre

export type UyusmazlikTuru =
  | 'ticari'
  | 'isciIsveren'
  | 'kiraOrtaklik'
  | 'aile'
  | 'tuketici'
  | 'diger';

export type TuketiciOdemeTipi = 'esitOdenecek' | 'saticiOdeyecek';

export interface HesaplamaGirdisi {
  uyusmazlikTuru: UyusmazlikTuru;
  tarafSayisi: number;
  anlasmaVar: boolean;
  anlasmaTutari: number;
  tuketiciOdemeTipi: TuketiciOdemeTipi;
  tuketiciSayisi: number;
  saticiSayisi: number;
}

export interface TarafPay {
  tarafAdi: string;
  brutTutar: number;
  stopajTutar: number;
  kdvTutar: number;
  netTutar: number;
  stopajOrani: number;
}

export interface HesaplamaDetaylari {
  saatlikUcret: number | null;
  saatSayisi: number | null;
  nisbiOran: number | null;
  aciklama: string;
  kademeDetay: string | null;
}

export interface HesaplamaSonucu {
  brutUcret: number;
  stopajMiktari: number;
  netUcret: number;
  tarafPaylar: TarafPay[];
  detaylar: HesaplamaDetaylari;
}

export const UYUSMAZLIK_TURLERI: { id: UyusmazlikTuru; label: string }[] = [
  { id: 'ticari', label: 'Ticari' },
  { id: 'isciIsveren', label: 'İşçi-İşveren' },
  { id: 'kiraOrtaklik', label: 'Kira, Komşuluk, KMK / Ortaklığın Giderilmesi' },
  { id: 'aile', label: 'Aile' },
  { id: 'tuketici', label: 'Tüketici' },
  { id: 'diger', label: 'Diğer' },
];

const STOPAJ_ORANI = 0.2;

export function paraFormati(tutar: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(tutar);
}

export function yuzdeFormati(oran: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(oran);
}

function saatlikUcretGetir(tur: UyusmazlikTuru, tarafSayisi: number): number {
  const tarifeler: Record<UyusmazlikTuru, [number, number, number, number]> = {
    ticari: [1500, 3200, 3300, 3400],
    isciIsveren: [1130, 2460, 2560, 2660],
    kiraOrtaklik: [1170, 2540, 2640, 2740],
    aile: [1000, 2200, 2300, 2400],
    tuketici: [1000, 2200, 2300, 2400],
    diger: [1000, 2200, 2300, 2400],
  };
  const tarife = tarifeler[tur];
  if (tarafSayisi === 2) return tarife[0];
  if (tarafSayisi >= 3 && tarafSayisi <= 5) return tarife[1];
  if (tarafSayisi >= 6 && tarafSayisi <= 10) return tarife[2];
  return tarife[3];
}

function nisbiUcretHesapla(tutar: number): { toplam: number; detay: string } {
  const kademeler: { limit: number; oran: number; oranLabel: string }[] = [
    { limit: 600_000, oran: 0.06, oranLabel: '%6' },
    { limit: 960_000, oran: 0.05, oranLabel: '%5' },
    { limit: 1_560_000, oran: 0.04, oranLabel: '%4' },
    { limit: 3_120_000, oran: 0.03, oranLabel: '%3' },
    { limit: 9_360_000, oran: 0.02, oranLabel: '%2' },
    { limit: 12_480_000, oran: 0.015, oranLabel: '%1,5' },
    { limit: 24_960_000, oran: 0.01, oranLabel: '%1' },
    { limit: Infinity, oran: 0.005, oranLabel: '%0,5' },
  ];

  let toplamUcret = 0;
  let kalanTutar = tutar;
  const detayMetinleri: string[] = [];
  let ilkKademe = true;

  for (const kademe of kademeler) {
    if (kalanTutar <= 0) break;
    const kademeTutar = Math.min(kalanTutar, kademe.limit);
    const kademeUcret = kademeTutar * kademe.oran;
    toplamUcret += kademeUcret;
    const oncek = ilkKademe ? 'İlk' : 'Sonraki';
    if (kademe.limit === Infinity) {
      detayMetinleri.push(`• Kalan ${paraFormati(kademeTutar)} için ${kademe.oranLabel} = ${paraFormati(kademeUcret)}`);
    } else {
      detayMetinleri.push(`• ${oncek} ${paraFormati(kademeTutar)} için ${kademe.oranLabel} = ${paraFormati(kademeUcret)}`);
    }
    kalanTutar -= kademeTutar;
    ilkKademe = false;
  }

  return { toplam: toplamUcret, detay: detayMetinleri.join('\n') };
}

function nisbiOraniGetir(tutar: number, hesaplananUcret: number): number {
  return tutar > 0 ? hesaplananUcret / tutar : 0;
}

function savcilikMakbuzuHesapla(girdi: HesaplamaGirdisi): HesaplamaSonucu {
  const saatlikUcret = saatlikUcretGetir(girdi.uyusmazlikTuru, girdi.tarafSayisi);
  const tekSaatlikUcret = saatlikUcret * 2;
  const brutUcret = girdi.tarafSayisi === 2 ? tekSaatlikUcret * 2 : tekSaatlikUcret;

  const netUcretKdvHaric = (brutUcret * 5) / 6;
  const kdvTutar = brutUcret / 6;
  const stopajTutar = netUcretKdvHaric * STOPAJ_ORANI;
  const netUcret = brutUcret - stopajTutar;

  const tarafPay: TarafPay = {
    tarafAdi: 'Savcılık Makbuzu',
    brutTutar: brutUcret,
    stopajTutar,
    kdvTutar,
    netTutar: netUcret,
    stopajOrani: STOPAJ_ORANI,
  };

  const aciklama =
    girdi.tarafSayisi === 2
      ? `Anlaşma olmadığı için savcılığa her iki taraf için 2 saatlik ücret makbuzu kesilecek (${paraFormati(saatlikUcret * 2)} × 2 taraf = ${paraFormati(brutUcret)}). Bu rakam KDV dahil brüt tutardır. İçinde ${paraFormati(kdvTutar)} KDV ve ${paraFormati(stopajTutar)} stopaj vardır.`
      : `Anlaşma yoksa taraf sayısına bakılmaksızın tarifede yazılı 2 saatlik ücret ödenir (${paraFormati(saatlikUcret)} × 2 = ${paraFormati(brutUcret)}). Bu rakam KDV dahil brüt tutardır. İçinde ${paraFormati(kdvTutar)} KDV ve ${paraFormati(stopajTutar)} stopaj vardır.`;

  return {
    brutUcret,
    stopajMiktari: stopajTutar,
    netUcret,
    tarafPaylar: [tarafPay],
    detaylar: {
      saatlikUcret,
      saatSayisi: 2,
      nisbiOran: null,
      aciklama,
      kademeDetay: null,
    },
  };
}

function tumSenaryolariHesapla(
  brutUcret: number,
  tarafSayisi: number,
  uyusmazlikTuru: UyusmazlikTuru
): TarafPay[] {
  if (tarafSayisi <= 0) return [];

  const kdvTutar = brutUcret / 6;
  const netUcretKdvHaric = (brutUcret * 5) / 6;
  const sadeceSahislar = uyusmazlikTuru === 'aile';

  const paylar: TarafPay[] = [];

  if (!sadeceSahislar) {
    const tuzelStopaj = netUcretKdvHaric * STOPAJ_ORANI;
    paylar.push({
      tarafAdi: 'Tek Taraf Ödeyecek — Tüzel Kişi',
      brutTutar: brutUcret,
      stopajTutar: tuzelStopaj,
      kdvTutar,
      netTutar: brutUcret - tuzelStopaj,
      stopajOrani: STOPAJ_ORANI,
    });
  }

  paylar.push({
    tarafAdi: 'Tek Taraf Ödeyecek — Gerçek Kişi',
    brutTutar: brutUcret,
    stopajTutar: 0,
    kdvTutar,
    netTutar: brutUcret,
    stopajOrani: 0,
  });

  const esitPay = brutUcret / tarafSayisi;
  const esitKdv = kdvTutar / tarafSayisi;
  const esitNetKdvHaric = netUcretKdvHaric / tarafSayisi;
  const esitStopaj = esitNetKdvHaric * STOPAJ_ORANI;

  if (!sadeceSahislar) {
    paylar.push({
      tarafAdi: 'Eşit Ödeme — Tüzel Kişi (Her Biri)',
      brutTutar: esitPay,
      stopajTutar: esitStopaj,
      kdvTutar: esitKdv,
      netTutar: esitPay - esitStopaj,
      stopajOrani: STOPAJ_ORANI,
    });
  }

  paylar.push({
    tarafAdi: 'Eşit Ödeme — Gerçek Kişi (Her Biri)',
    brutTutar: esitPay,
    stopajTutar: 0,
    kdvTutar: esitKdv,
    netTutar: esitPay,
    stopajOrani: 0,
  });

  return paylar;
}

function anlasmaHesapla(girdi: HesaplamaGirdisi): HesaplamaSonucu {
  let brutUcret: number;
  let nisbiOran: number | null = null;
  let aciklama = '';
  let kademeDetay: string | null = null;

  const asgariUcret = girdi.uyusmazlikTuru === 'ticari' ? 13_000 : 9_000;

  if (girdi.anlasmaTutari > 0) {
    const sonuc = nisbiUcretHesapla(girdi.anlasmaTutari);
    brutUcret = sonuc.toplam;
    kademeDetay = sonuc.detay;
    nisbiOran = nisbiOraniGetir(girdi.anlasmaTutari, brutUcret);

    if (brutUcret < asgariUcret) {
      aciklama = `Hesaplanan ücret asgari ücretin altında olduğu için asgari ücret (${paraFormati(asgariUcret)}) uygulandı.`;
      brutUcret = asgariUcret;
      kademeDetay = null;
    } else {
      aciklama = `Anlaşma tutarı (${paraFormati(girdi.anlasmaTutari)}) üzerinden kademeli nisbi ücret hesaplandı:`;
    }
  } else {
    brutUcret = asgariUcret;
    aciklama = `Para ile değerlendirilemeyen uyuşmazlık için asgari ücret (${paraFormati(asgariUcret)}) uygulandı.`;
  }

  if (girdi.uyusmazlikTuru === 'aile') {
    aciklama += '\n\nNot: Aile hukuku uyuşmazlıklarında sadece gerçek kişiler taraf olabilir.';
  }

  const tarafPaylar = tumSenaryolariHesapla(brutUcret, girdi.tarafSayisi, girdi.uyusmazlikTuru);
  const toplamStopaj = tarafPaylar.reduce((acc, p) => acc + p.stopajTutar, 0);
  const toplamNet = tarafPaylar.reduce((acc, p) => acc + p.netTutar, 0);

  return {
    brutUcret,
    stopajMiktari: toplamStopaj,
    netUcret: toplamNet,
    tarafPaylar,
    detaylar: {
      saatlikUcret: null,
      saatSayisi: null,
      nisbiOran,
      aciklama,
      kademeDetay,
    },
  };
}

function tuketiciSaticiOdeyecekHesapla(
  brutUcret: number,
  aciklama: string,
  kademeDetay: string | null,
  nisbiOran: number | null
): HesaplamaSonucu {
  const kdvTutar = brutUcret / 6;
  const netKdvHaric = (brutUcret * 5) / 6;
  const stopaj = netKdvHaric * STOPAJ_ORANI;

  const paylar: TarafPay[] = [
    {
      tarafAdi: 'Satıcı/Sağlayıcı (Tüzel Kişi - Stopajlı)',
      brutTutar: brutUcret,
      stopajTutar: stopaj,
      kdvTutar,
      netTutar: brutUcret - stopaj,
      stopajOrani: STOPAJ_ORANI,
    },
    {
      tarafAdi: 'Satıcı/Sağlayıcı (Gerçek Kişi - Stopajsız)',
      brutTutar: brutUcret,
      stopajTutar: 0,
      kdvTutar,
      netTutar: brutUcret,
      stopajOrani: 0,
    },
  ];

  const tuketiciAciklama =
    aciklama +
    `\n\nTüketici özel durumu:\n• Ödeme: Satıcı/Sağlayıcı tamamını ödeyecek\n• Toplam ücret: ${paraFormati(brutUcret)}\n• Tüzel kişi ise stopajlı, gerçek kişi ise stopajsız makbuz kesilecek`;

  return {
    brutUcret,
    stopajMiktari: stopaj,
    netUcret: brutUcret,
    tarafPaylar: paylar,
    detaylar: {
      saatlikUcret: null,
      saatSayisi: null,
      nisbiOran,
      aciklama: tuketiciAciklama,
      kademeDetay,
    },
  };
}

function tuketiciEsitOdemeHesapla(
  girdi: HesaplamaGirdisi,
  brutUcret: number,
  aciklama: string,
  kademeDetay: string | null,
  nisbiOran: number | null
): HesaplamaSonucu {
  const toplamTaraf = girdi.saticiSayisi + girdi.tuketiciSayisi;

  if (toplamTaraf <= 0 || girdi.saticiSayisi <= 0 || girdi.tuketiciSayisi <= 0) {
    return {
      brutUcret,
      stopajMiktari: 0,
      netUcret: brutUcret,
      tarafPaylar: [],
      detaylar: {
        saatlikUcret: null,
        saatSayisi: null,
        nisbiOran,
        aciklama: 'Hata: Geçersiz taraf sayısı',
        kademeDetay: null,
      },
    };
  }

  const saatlikUcret = saatlikUcretGetir('tuketici', toplamTaraf);
  const ikiSaatlikUcret = saatlikUcret * 2;
  const savcilikToplamUcret = toplamTaraf === 2 ? ikiSaatlikUcret : ikiSaatlikUcret / 2;

  const tarafBasiPay = brutUcret / toplamTaraf;
  const saticiToplamPay = tarafBasiPay * girdi.saticiSayisi;
  const tuketiciToplamPay = tarafBasiPay * girdi.tuketiciSayisi;

  const tuketiciBakiye = tuketiciToplamPay - savcilikToplamUcret;
  const tuketiciBakiyeHerBiri = tuketiciBakiye > 0 ? tuketiciBakiye / girdi.tuketiciSayisi : 0;
  const saticiHerBiri = saticiToplamPay / girdi.saticiSayisi;

  const paylar: TarafPay[] = [];

  const saticiKdv = saticiHerBiri / 6;
  const saticiNetKdvHaric = (saticiHerBiri * 5) / 6;
  const saticiStopaj = saticiNetKdvHaric * STOPAJ_ORANI;

  paylar.push({
    tarafAdi: 'Satıcı/Sağlayıcı (Tüzel - Stopajlı - Her Biri)',
    brutTutar: saticiHerBiri,
    stopajTutar: saticiStopaj,
    kdvTutar: saticiKdv,
    netTutar: saticiHerBiri - saticiStopaj,
    stopajOrani: STOPAJ_ORANI,
  });

  paylar.push({
    tarafAdi: 'Satıcı/Sağlayıcı (Gerçek - Stopajsız - Her Biri)',
    brutTutar: saticiHerBiri,
    stopajTutar: 0,
    kdvTutar: saticiKdv,
    netTutar: saticiHerBiri,
    stopajOrani: 0,
  });

  const savcilikKdv = savcilikToplamUcret / 6;
  const savcilikNetKdvHaric = (savcilikToplamUcret * 5) / 6;
  const savcilikStopaj = savcilikNetKdvHaric * STOPAJ_ORANI;

  paylar.push({
    tarafAdi: 'Tüketiciler (Savcılık Makbuzu - Tümü)',
    brutTutar: savcilikToplamUcret,
    stopajTutar: savcilikStopaj,
    kdvTutar: savcilikKdv,
    netTutar: savcilikToplamUcret - savcilikStopaj,
    stopajOrani: STOPAJ_ORANI,
  });

  if (tuketiciBakiyeHerBiri > 0) {
    const bakiyeKdv = tuketiciBakiyeHerBiri / 6;
    const bakiyeNetKdvHaric = (tuketiciBakiyeHerBiri * 5) / 6;
    const bakiyeStopaj = bakiyeNetKdvHaric * STOPAJ_ORANI;

    paylar.push({
      tarafAdi: 'Tüketici Bakiye (İsteğe Bağlı - Tüzel - Her Biri)',
      brutTutar: tuketiciBakiyeHerBiri,
      stopajTutar: bakiyeStopaj,
      kdvTutar: bakiyeKdv,
      netTutar: tuketiciBakiyeHerBiri - bakiyeStopaj,
      stopajOrani: STOPAJ_ORANI,
    });

    paylar.push({
      tarafAdi: 'Tüketici Bakiye (İsteğe Bağlı - Gerçek - Her Biri)',
      brutTutar: tuketiciBakiyeHerBiri,
      stopajTutar: 0,
      kdvTutar: bakiyeKdv,
      netTutar: tuketiciBakiyeHerBiri,
      stopajOrani: 0,
    });
  }

  const toplamStopaj = paylar.reduce((acc, p) => acc + p.stopajTutar, 0);
  const toplamNet = paylar.reduce((acc, p) => acc + p.netTutar, 0);

  let tuketiciAciklama = aciklama;
  tuketiciAciklama += '\n\nTüketici özel durumu:\n';
  tuketiciAciklama += '• Ödeme: Eşit ödenecek\n';
  tuketiciAciklama += `• Toplam taraf: ${toplamTaraf} (${girdi.saticiSayisi} satıcı/sağlayıcı + ${girdi.tuketiciSayisi} tüketici)\n`;
  tuketiciAciklama += `• Taraf başına pay: ${paraFormati(tarafBasiPay)}\n`;
  tuketiciAciklama += `• Her satıcı/sağlayıcı: ${paraFormati(saticiHerBiri)}\n`;
  tuketiciAciklama += `• Savcılığın tüm tüketiciler için ödediği: ${paraFormati(savcilikToplamUcret)}\n`;
  if (tuketiciBakiye > 0) {
    tuketiciAciklama += `• Tüketiciler toplam bakiye (isteğe bağlı): ${paraFormati(tuketiciBakiye)}\n`;
    tuketiciAciklama += `• Her tüketici için bakiye: ${paraFormati(tuketiciBakiyeHerBiri)}`;
  }

  return {
    brutUcret,
    stopajMiktari: toplamStopaj,
    netUcret: toplamNet,
    tarafPaylar: paylar,
    detaylar: {
      saatlikUcret,
      saatSayisi: 2,
      nisbiOran,
      aciklama: tuketiciAciklama,
      kademeDetay,
    },
  };
}

function tuketiciAnlasmaHesapla(girdi: HesaplamaGirdisi): HesaplamaSonucu {
  let brutUcret: number;
  let nisbiOran: number | null = null;
  let aciklama = '';
  let kademeDetay: string | null = null;

  if (girdi.anlasmaTutari > 0) {
    const sonuc = nisbiUcretHesapla(girdi.anlasmaTutari);
    brutUcret = sonuc.toplam;
    kademeDetay = sonuc.detay;
    nisbiOran = nisbiOraniGetir(girdi.anlasmaTutari, brutUcret);

    if (brutUcret < 9_000) {
      aciklama = 'Hesaplanan ücret asgari ücretin altında olduğu için asgari ücret (₺9.000,00) uygulandı.';
      brutUcret = 9_000;
      kademeDetay = null;
    } else {
      aciklama = `Anlaşma tutarı (${paraFormati(girdi.anlasmaTutari)}) üzerinden kademeli nisbi ücret hesaplandı:`;
    }
  } else {
    brutUcret = 9_000;
    aciklama = 'Para ile değerlendirilemeyen uyuşmazlık için asgari ücret uygulandı.';
  }

  if (girdi.tuketiciOdemeTipi === 'saticiOdeyecek') {
    return tuketiciSaticiOdeyecekHesapla(brutUcret, aciklama, kademeDetay, nisbiOran);
  }
  return tuketiciEsitOdemeHesapla(girdi, brutUcret, aciklama, kademeDetay, nisbiOran);
}

export function hesapla(girdi: HesaplamaGirdisi): HesaplamaSonucu {
  if (!girdi.anlasmaVar) {
    return savcilikMakbuzuHesapla(girdi);
  }
  if (girdi.uyusmazlikTuru === 'tuketici') {
    return tuketiciAnlasmaHesapla(girdi);
  }
  return anlasmaHesapla(girdi);
}
