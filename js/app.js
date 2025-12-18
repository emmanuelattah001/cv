const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

AOS.init();
// Initialize AOS (Animate On Scroll) library
// This library is used for scroll animations on the page

// const backToTopBtn = document.querySelector(".back-to-top");
// window.onscroll = function () {
//   if (
//     document.body.scrollTop > 300 ||
//     document.documentElement.scrollTop > 300
//   ) {
//     backToTopBtn.style.display = "block";
//   } else {
//     backToTopBtn.style.display = "none";
//   }
// };

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
