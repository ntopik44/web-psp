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

const sliderItems = document.querySelectorAll(".slider-item");

let sliderActive = 1;

if (sliderItems) {
  sliderItems.forEach((slider, index) => {
    if (index === 0) {
      slider.setAttribute("data-show", "show");
    } else {
      slider.setAttribute("data-show", "hidden");
    }
  });

  setInterval(() => {
    sliderItems.forEach((slider, index) => {
      if (sliderActive == index) {
        slider.setAttribute("data-show", "show");
      } else {
        slider.setAttribute("data-show", "hidden");
      }
    });

    if (sliderActive == sliderItems.length - 1) {
      sliderActive = 0;
    } else {
      sliderActive++;
    }
  }, 5000);
}

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

function kirimWhatsApp() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  const teks = `Halo Pilar Screen Printing,%0A
    %0ASaya ingin menyampaikan kritik dan saran:%0A
    %0ANama: ${nama}%0A
  Email: ${email}%0A
  Pesan: ${pesan}`;

  const nomor = "6281381196712"; // Nomor WhatsApp tujuan
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
