// Latihan 1: Manipulasi Teks dan Visual
const teksSambutan = document.getElementById('teks-sambutan');
const teksKeterangan = document.getElementById('teks-keterangan');
const btnUbah = document.getElementById('btn-ubah');
const btnReset = document.getElementById('btn-reset');

const teksAwal = teksSambutan.textContent;
const ketAwal = teksKeterangan.textContent;

btnUbah.addEventListener('click', () => {
    teksSambutan.textContent = "Luar Biasa! Teks Berhasil Diubah!";
    teksSambutan.style.color = "#2563eb";
    teksKeterangan.textContent = "Manipulasi DOM dengan JavaScript berhasil dilakukan.";
    teksKeterangan.style.color = "#16a34a";
    teksKeterangan.style.fontWeight = "bold";
});

btnReset.addEventListener('click', () => {
    teksSambutan.textContent = teksAwal;
    teksSambutan.style.color = "";
    teksKeterangan.textContent = ketAwal;
    teksKeterangan.style.color = "";
    teksKeterangan.style.fontWeight = "";
});

// Latihan 2: Live Input Preview
const inputNama = document.getElementById('input-nama');
const outputNama = document.getElementById('output-nama');

inputNama.addEventListener('input', () => {
    if (inputNama.value.trim() === "") {
        outputNama.textContent = "Praktikan";
    } else {
        outputNama.textContent = inputNama.value;
    }
});

// Latihan 3: Pencacah Angka (Counter)
const angkaCounter = document.getElementById('angka-counter');
const btnKurang = document.getElementById('btn-kurang');
const btnTambah = document.getElementById('btn-tambah');

let angka = 0;

btnTambah.addEventListener('click', () => {
    angka++;
    angkaCounter.textContent = angka;
});

btnKurang.addEventListener('click', () => {
    if (angka > 0){
    angka--;
    angkaCounter.textContent = angka;
    }
});