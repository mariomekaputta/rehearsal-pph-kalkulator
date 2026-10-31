// Tarif TER PPh 21 bulanan kategori A (TK/0, TK/1, K/0).
// Sumber: tarif-ter.md (Lampiran PP 58 Tahun 2023).
// batasAtas termasuk ("s.d."); baris terakhir tanpa batas atas.
// Tarif disimpan dalam basis poin (1% = 100) agar hitungan tetap bilangan bulat.
const TER_KATEGORI_A = [
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
];

function cariTarifBp(bruto) {
  return TER_KATEGORI_A.find((baris) => bruto <= baris.batasAtas).bp;
}

// PPh 21 sebulan = bruto x tarif TER, dibulatkan ke bawah ke rupiah penuh.
function hitungGaji(bruto) {
  const bp = cariTarifBp(bruto);
  const pph = Math.floor((bruto * bp) / 10000);
  return { bruto, bp, pph, bersih: bruto - pph };
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
  const form = document.getElementById("form-gaji");
  const input = document.getElementById("gaji");
  const pesan = document.getElementById("pesan");
  const hasil = document.getElementById("hasil");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const bruto = bacaInput(input.value);
    if (bruto === null) {
      pesan.textContent = "Masukkan gaji dalam angka rupiah bulat, misalnya 10.000.000.";
      hasil.hidden = true;
      return;
    }
    const r = hitungGaji(bruto);
    pesan.textContent = "";
    document.getElementById("out-kotor").textContent = formatRupiah(r.bruto);
    document.getElementById("out-tarif").textContent = formatTarif(r.bp);
    document.getElementById("out-pph").textContent = formatRupiah(r.pph);
    document.getElementById("out-bersih").textContent = formatRupiah(r.bersih);
    hasil.hidden = false;
  });
}

if (typeof module !== "undefined") {
  module.exports = { hitungGaji, bacaInput, formatRupiah, TER_KATEGORI_A };
}
