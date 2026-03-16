// window.addEventListener("scroll", function () {
//   let navbar = document.getElementById("navbar");

//   if (window.scrollY > 100) {
//     navbar.style.background = "rgb(20, 77, 47)";
//   } else {
//     navbar.style.background = "transparent";
//   }
// });
const language = {
  en: {
    title: "Integrated Coconut Processing",
    text: "Transforming coconut into sustainable products for the world.",
  },

  id: {
    title: "Pengolahan Kelapa Terpadu",
    text: "Mengubah kelapa menjadi produk berkelanjutan untuk dunia.",
  },
};

function setLanguage(lang) {
  document.getElementById("hero-title").innerText = language[lang].title;

  document.getElementById("hero-text").innerText = language[lang].text;
}
// // // Product slider
// // let slides = document.querySelectorAll(".slide");
// // let index = 0;

// // function showSlide(i) {
// //   slides.forEach((slide) => slide.classList.remove("active"));
// //   slides[i].classList.add("active");
// // }

// // document.querySelector(".next").onclick = () => {
// //   index++;
// //   if (index >= slides.length) index = 0;
// //   showSlide(index);
// // };

// // document.querySelector(".prev").onclick = () => {
// //   index--;
// //   if (index < 0) index = slides.length - 1;
// //   showSlide(index);
// };
// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// slider
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

// tombol next
next.addEventListener("click", () => {
  index++;
  if (index >= slides.length) index = 0;
  showSlide(index);
});

// tombol prev
prev.addEventListener("click", () => {
  index--;
  if (index < 0) index = slides.length - 1;
  showSlide(index);
});

// AUTOSLIDE
setInterval(() => {
  index++;
  if (index >= slides.length) index = 0;
  showSlide(index);
}, 2000); // ganti setiap 4 detik
