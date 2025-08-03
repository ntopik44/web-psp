// Fungsi toggle menu hamburger
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}
// Efek scroll pada navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Fungsi buka/tutup deskripsi
function toggleDeskripsi(clickedItem) {
  const semuaItem = document.querySelectorAll(".produk-item");

  semuaItem.forEach((item) => {
    const deskripsi = item.querySelector(".produk-deskripsi");

    // Jika yang diklik adalah item yang sama dan deskripsi sedang terbuka, maka tutup
    if (item === clickedItem) {
      const sedangTerbuka = deskripsi.classList.contains("show");
      // Tutup semua dulu
      document
        .querySelectorAll(".produk-deskripsi")
        .forEach((desc) => desc.classList.remove("show"));
      // Kalau sebelumnya belum terbuka, buka
      if (!sedangTerbuka) {
        deskripsi.classList.add("show");
      }
    } else {
      // Pastikan item lainnya ditutup
      deskripsi.classList.remove("show");
    }
  });
}

// Klik di luar produk akan menutup semua deskripsi
document.addEventListener("click", function (event) {
  const isClickInsideProduk = event.target.closest(".produk-item");
  if (!isClickInsideProduk) {
    document
      .querySelectorAll(".produk-deskripsi")
      .forEach((desc) => desc.classList.remove("show"));
  }
});

function kirimWhatsApp() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  const teks = `Halo Pilar Screen Printing,%0A%0ASaya ingin menyampaikan kritik dan saran:%0A%0A
Nama: ${nama}%0A
Email: ${email}%0A
Pesan: ${pesan}`;

  const nomor = "6282232674959"; // Nomor WhatsApp tujuan
  const url = `https://wa.me/${nomor}?text=${teks}`;

  window.open(url, "_blank");
  return false; // Mencegah form reload
}

function openWAModal() {
  document.getElementById("waModal").style.display = "block";
}
function closeWAModal() {
  document.getElementById("waModal").style.display = "none";
}

function kirimKritikSaran() {
  const nama = document.getElementById("waNama").value.trim();
  const pesan = document.getElementById("waPesan").value.trim();

  const teks = `Halo Pilar Screen Printing,%0A%0ASaya ingin menyampaikan kritik dan saran:%0A%0ANama: ${nama}%0APesan: ${pesan}`;
  const nomor = "6282232674959";
  const url = `https://wa.me/${nomor}?text=${teks}`;

  window.open(url, "_blank");
  closeWAModal();
  return false;
}

// function toggleDeskripsi(el) {
//   const deskripsi = el.querySelector(".produk-deskripsi");
//   deskripsi.classList.toggle("show");
// }

// const produkData = [
//   {
//     title: "Cup PP",
//     desc: "Cup PP bening, cocok untuk minuman dingin. Bisa custom logo brand UMKM Anda.",
//   },
//   {
//     title: "Cup PET",
//     desc: "Cup PET lebih tebal dan transparan, ideal untuk cold drink premium dan branding.",
//   },
//   {
//     title: "Cup Paper",
//     desc: "Cup kertas ramah lingkungan, cocok untuk kopi panas atau minuman takeaway.",
//   },
//   {
//     title: "Paperbowl",
//     desc: "Paperbowl tahan panas dan tumpahan, cocok untuk bakso, mie, atau makanan berat lainnya.",
//   },
// ];

// function openModal(index) {
//   document.getElementById("modal-title").innerText = produkData[index].title;
//   document.getElementById("modal-desc").innerText = produkData[index].desc;
//   document.getElementById("modal").style.display = "flex";
// }

// function closeModal() {
//   document.getElementById("modal").style.display = "none";
// }
