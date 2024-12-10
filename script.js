const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeSidebar = document.querySelector(".close");
const nav = document.querySelector(".nav-overlay");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("show");
});

closeSidebar.addEventListener("click", () => {
  nav.classList.toggle("show");
});
