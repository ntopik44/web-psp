// Toggle menu untuk tampilan mobile
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}
// Menutup menu saat klik di luar area nav
document.addEventListener("click", function (event) {
  const navLinks = document.getElementById("nav-links");
  const hamburger = document.querySelector(".hamburger");
  const isClickInsideNav = navLinks.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideNav && !isClickOnHamburger) {
    navLinks.classList.remove("show");
  }
});

// Ubah style navbar saat discroll
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
