function bukaUndangan() {
  document.getElementById("cover").style.display = "none";
  document.body.style.overflow = "auto";
}

const tanggalAcara = new Date(2026, 11, 26, 12);

function hitungMundur() {
    let sekarang = new Date();
    let selisih = tanggalAcara - sekarang;

    let hari = parseInt (selisih / (1000*60*60*24));
    let jam = parseInt((selisih % (1000*60*60*24)) / (1000*60*60));
    let menit = parseInt((selisih % (1000*60*60)) / (1000*60));
    let detik = parseInt((selisih % (1000*60)) / 1000);

    document.getElementById("hitungMundur").innerHTML = `${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik`;
}

hitungMundur();
    setInterval(hitungMundur, 1000);

let ucapan = [];

function kirimUcapan() {
    let nama = document.getElementById("nama").value;
    let hadir = document.getElementById("hadir").value;
    let pesan = document.getElementById("pesan").value;

    if (nama === "" || pesan === "") {
        alert("nama dan ucapan harus diisi!");
        return;
    } 

    ucapan.push ({nama: nama, hadir: hadir, pesan: pesan});

    document.getElementById("nama").value = "";
    document.getElementById("pesan").value = "";

    let isi = "";
    ucapan.forEach(item => {
        isi += `<div class="kotakucapan mx-auto">
              <strong>${item.nama}</strong> (${item.hadir})
              <p>${item.pesan}</p>
            </div>`;
    });

    document.getElementById("daftarUcapan").innerHTML = isi;
}