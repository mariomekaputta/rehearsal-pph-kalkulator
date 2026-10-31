// Tarif Efektif Rata-rata (TER) PPh 21 bulanan, kategori A, B, dan C.
// Sumber: tarif-ter.md (Lampiran PP 58 Tahun 2023).
// batasAtas termasuk ("s.d."); baris terakhir tanpa batas atas.
// Tarif disimpan dalam basis poin (1% = 100) agar hitungan tetap bilangan bulat.
const TER = {
  A: [
    { batasAtas: 5400000, bp: 0 },
    { batasAtas: 5650000, bp: 25 },
    { batasAtas: 5950000, bp: 50 },
    { batasAtas: 6300000, bp: 75 },
    { batasAtas: 6750000, bp: 100 },
    { batasAtas: 7500000, bp: 125 },
    { batasAtas: 8550000, bp: 150 },
    { batasAtas: 9650000, bp: 175 },
    { batasAtas: 10050000, bp: 200 },
    { batasAtas: 10350000, bp: 225 },
    { batasAtas: 10700000, bp: 250 },
    { batasAtas: 11050000, bp: 300 },
    { batasAtas: 11600000, bp: 350 },
    { batasAtas: 12500000, bp: 400 },
    { batasAtas: 13750000, bp: 500 },
    { batasAtas: 15100000, bp: 600 },
    { batasAtas: 16950000, bp: 700 },
    { batasAtas: 19750000, bp: 800 },
    { batasAtas: 24150000, bp: 900 },
    { batasAtas: 26450000, bp: 1000 },
    { batasAtas: 28000000, bp: 1100 },
    { batasAtas: 30050000, bp: 1200 },
    { batasAtas: 32400000, bp: 1300 },
    { batasAtas: 35400000, bp: 1400 },
    { batasAtas: 39100000, bp: 1500 },
    { batasAtas: 43850000, bp: 1600 },
    { batasAtas: 47800000, bp: 1700 },
    { batasAtas: 51400000, bp: 1800 },
    { batasAtas: 56300000, bp: 1900 },
    { batasAtas: 62200000, bp: 2000 },
    { batasAtas: 68600000, bp: 2100 },
    { batasAtas: 77500000, bp: 2200 },
    { batasAtas: 89000000, bp: 2300 },
    { batasAtas: 103000000, bp: 2400 },
    { batasAtas: 125000000, bp: 2500 },
    { batasAtas: 157000000, bp: 2600 },
    { batasAtas: 206000000, bp: 2700 },
    { batasAtas: 337000000, bp: 2800 },
    { batasAtas: 454000000, bp: 2900 },
    { batasAtas: 550000000, bp: 3000 },
    { batasAtas: 695000000, bp: 3100 },
    { batasAtas: 910000000, bp: 3200 },
    { batasAtas: 1400000000, bp: 3300 },
    { batasAtas: Infinity, bp: 3400 },
  ],
  B: [
    { batasAtas: 6200000, bp: 0 },
    { batasAtas: 6500000, bp: 25 },
    { batasAtas: 6850000, bp: 50 },
    { batasAtas: 7300000, bp: 75 },
    { batasAtas: 9200000, bp: 100 },
    { batasAtas: 10750000, bp: 150 },
    { batasAtas: 11250000, bp: 200 },
    { batasAtas: 11600000, bp: 250 },
    { batasAtas: 12600000, bp: 300 },
    { batasAtas: 13600000, bp: 400 },
    { batasAtas: 14950000, bp: 500 },
    { batasAtas: 16400000, bp: 600 },
    { batasAtas: 18450000, bp: 700 },
    { batasAtas: 21850000, bp: 800 },
    { batasAtas: 26000000, bp: 900 },
    { batasAtas: 27700000, bp: 1000 },
    { batasAtas: 29350000, bp: 1100 },
    { batasAtas: 31450000, bp: 1200 },
    { batasAtas: 33950000, bp: 1300 },
    { batasAtas: 37100000, bp: 1400 },
    { batasAtas: 41100000, bp: 1500 },
    { batasAtas: 45800000, bp: 1600 },
    { batasAtas: 49500000, bp: 1700 },
    { batasAtas: 53800000, bp: 1800 },
    { batasAtas: 58500000, bp: 1900 },
    { batasAtas: 64000000, bp: 2000 },
    { batasAtas: 71000000, bp: 2100 },
    { batasAtas: 80000000, bp: 2200 },
    { batasAtas: 93000000, bp: 2300 },
    { batasAtas: 109000000, bp: 2400 },
    { batasAtas: 129000000, bp: 2500 },
    { batasAtas: 163000000, bp: 2600 },
    { batasAtas: 211000000, bp: 2700 },
    { batasAtas: 374000000, bp: 2800 },
    { batasAtas: 459000000, bp: 2900 },
    { batasAtas: 555000000, bp: 3000 },
    { batasAtas: 704000000, bp: 3100 },
    { batasAtas: 957000000, bp: 3200 },
    { batasAtas: 1405000000, bp: 3300 },
    { batasAtas: Infinity, bp: 3400 },
  ],
  C: [
    { batasAtas: 6600000, bp: 0 },
    { batasAtas: 6950000, bp: 25 },
    { batasAtas: 7350000, bp: 50 },
    { batasAtas: 7800000, bp: 75 },
    { batasAtas: 8850000, bp: 100 },
    { batasAtas: 9800000, bp: 125 },
    { batasAtas: 10950000, bp: 150 },
    { batasAtas: 11200000, bp: 175 },
    { batasAtas: 12050000, bp: 200 },
    { batasAtas: 12950000, bp: 300 },
    { batasAtas: 14150000, bp: 400 },
    { batasAtas: 15550000, bp: 500 },
    { batasAtas: 17050000, bp: 600 },
    { batasAtas: 19500000, bp: 700 },
    { batasAtas: 22700000, bp: 800 },
    { batasAtas: 26600000, bp: 900 },
    { batasAtas: 28100000, bp: 1000 },
    { batasAtas: 30100000, bp: 1100 },
    { batasAtas: 32600000, bp: 1200 },
    { batasAtas: 35400000, bp: 1300 },
    { batasAtas: 38900000, bp: 1400 },
    { batasAtas: 43000000, bp: 1500 },
    { batasAtas: 47400000, bp: 1600 },
    { batasAtas: 51200000, bp: 1700 },
    { batasAtas: 55800000, bp: 1800 },
    { batasAtas: 60400000, bp: 1900 },
    { batasAtas: 66700000, bp: 2000 },
    { batasAtas: 74500000, bp: 2100 },
    { batasAtas: 83200000, bp: 2200 },
    { batasAtas: 95600000, bp: 2300 },
    { batasAtas: 110000000, bp: 2400 },
    { batasAtas: 134000000, bp: 2500 },
    { batasAtas: 169000000, bp: 2600 },
    { batasAtas: 221000000, bp: 2700 },
    { batasAtas: 390000000, bp: 2800 },
    { batasAtas: 463000000, bp: 2900 },
    { batasAtas: 561000000, bp: 3000 },
    { batasAtas: 709000000, bp: 3100 },
    { batasAtas: 965000000, bp: 3200 },
    { batasAtas: 1419000000, bp: 3300 },
    { batasAtas: Infinity, bp: 3400 },
  ],
};

// Status PTKP -> kategori TER (tarif-ter.md, "Kategori berdasarkan status PTKP").
const KATEGORI_PTKP = {
  "TK/0": "A",
  "TK/1": "A",
  "TK/2": "B",
  "TK/3": "B",
  "K/0": "A",
  "K/1": "B",
  "K/2": "B",
  "K/3": "C",
};

// Iuran BPJS (persen dalam basis poin; batas = gaji maksimal yang dipakai sebagai dasar).
const BPJS = {
  // Dipotong dari gaji karyawan.
  jht: { bp: 200 },
  jp: { bp: 100, batas: 11086300 },
  kesKaryawan: { bp: 100, batas: 12000000 },
  // Dibayar perusahaan, menambah penghasilan bruto untuk PPh 21.
  jkk: { bp: 24 },
  jkm: { bp: 30 },
  kesPerusahaan: { bp: 400, batas: 12000000 },
};

// n x bp / 10000 dengan bilangan bulat (BigInt) agar tidak ada galat pembulatan.
function kaliBp(n, bp, bulatkan) {
  const kali = BigInt(n) * BigInt(bp);
  const hasil = bulatkan === "terdekat" ? (kali + 5000n) / 10000n : kali / 10000n;
  return Number(hasil);
}

// Iuran BPJS dibulatkan ke rupiah terdekat.
function iuran(gaji, { bp, batas = Infinity }) {
  return kaliBp(Math.min(gaji, batas), bp, "terdekat");
}

function cariTarifBp(bruto, kategori) {
  return TER[kategori].find((baris) => bruto <= baris.batasAtas).bp;
}

// Bruto PPh 21 = gaji + JKK + JKM + BPJS Kesehatan perusahaan.
// PPh 21 sebulan = bruto x tarif TER, dibulatkan ke bawah ke rupiah penuh.
// Gaji bersih = gaji - JHT - JP - BPJS Kesehatan karyawan - PPh 21.
function hitungGaji(gaji, status = "TK/0") {
  const kategori = KATEGORI_PTKP[status];
  if (!kategori) throw new Error("Status PTKP tidak dikenal: " + status);

  const jkk = iuran(gaji, BPJS.jkk);
  const jkm = iuran(gaji, BPJS.jkm);
  const kesPerusahaan = iuran(gaji, BPJS.kesPerusahaan);
  const bruto = gaji + jkk + jkm + kesPerusahaan;

  const bp = cariTarifBp(bruto, kategori);
  const pph = kaliBp(bruto, bp, "bawah");

  const jht = iuran(gaji, BPJS.jht);
  const jp = iuran(gaji, BPJS.jp);
  const kesKaryawan = iuran(gaji, BPJS.kesKaryawan);
  const totalPotongan = jht + jp + kesKaryawan + pph;

  return {
    gaji, status, kategori,
    jkk, jkm, kesPerusahaan, bruto,
    bp, pph,
    jht, jp, kesKaryawan, totalPotongan,
    bersih: gaji - totalPotongan,
  };
}

function formatRupiah(n) {
  return "Rp" + n.toLocaleString("id-ID");
}

function formatTarif(bp) {
  return (bp / 100).toLocaleString("id-ID") + "%";
}

// Terima "10000000", "10.000.000", atau "Rp 10.000.000". Hanya rupiah bulat.
function bacaInput(teks) {
  const bersih = teks.replace(/^\s*rp\.?\s*/i, "").replace(/[.\s]/g, "");
  if (!/^\d+$/.test(bersih)) return null;
  const n = Number(bersih);
  return Number.isSafeInteger(n) ? n : null;
}

if (typeof document !== "undefined") {
  const input = document.getElementById("gaji");
  const kartu = document.getElementById("hasil");
  const out = (id) => document.getElementById(id);

  // Format ulang angka saat diketik (10000000 -> 10.000.000),
  // sambil menjaga posisi kursor relatif terhadap jumlah digit di kirinya.
  function formatSaatKetik() {
    const posisi = input.selectionStart ?? input.value.length;
    const digitKiri = input.value.slice(0, posisi).replace(/\D/g, "").length;
    const digit = input.value.replace(/\D/g, "").replace(/^0+(?=\d)/, "").slice(0, 15);
    const tampil = digit ? Number(digit).toLocaleString("id-ID") : "";
    input.value = tampil;

    let i = 0;
    let terlihat = 0;
    while (i < tampil.length && terlihat < digitKiri) {
      if (/\d/.test(tampil[i])) terlihat++;
      i++;
    }
    if (document.activeElement === input) input.setSelectionRange(i, i);
    return digit;
  }

  function statusTerpilih() {
    const r = document.querySelector('input[name="status"]:checked');
    return r ? r.value : "TK/0";
  }

  function tampilkan() {
    const status = statusTerpilih();
    const gaji = bacaInput(input.value);
    const r = hitungGaji(gaji ?? 0, status);
    const potong = (n) => "−" + formatRupiah(n);
    kartu.classList.toggle("kosong", !gaji);

    out("out-status").textContent = status;
    out("out-kategori").textContent = "Kategori " + r.kategori;
    out("out-kotor").textContent = formatRupiah(r.gaji);
    out("out-jkk").textContent = "+" + formatRupiah(r.jkk);
    out("out-jkm").textContent = "+" + formatRupiah(r.jkm);
    out("out-kes-perusahaan").textContent = "+" + formatRupiah(r.kesPerusahaan);
    out("out-bruto").textContent = formatRupiah(r.bruto);
    out("out-tarif").textContent = "TER " + r.kategori + " · " + formatTarif(r.bp);
    out("out-jht").textContent = potong(r.jht);
    out("out-jp").textContent = potong(r.jp);
    out("out-kes-karyawan").textContent = potong(r.kesKaryawan);
    out("out-pph").textContent = potong(r.pph);
    out("out-total-potongan").textContent = potong(r.totalPotongan);
    out("out-bersih").textContent = formatRupiah(r.bersih);
  }

  input.addEventListener("input", () => {
    formatSaatKetik();
    tampilkan();
  });
  document.getElementById("pilih-status").addEventListener("change", tampilkan);
  formatSaatKetik();
  tampilkan();
}

if (typeof module !== "undefined") {
  module.exports = { hitungGaji, bacaInput, formatRupiah, TER, KATEGORI_PTKP, BPJS };
}
