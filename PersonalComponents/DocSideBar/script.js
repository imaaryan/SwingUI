// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");
const body = document.body;

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    // Switch to light mode
    body.classList.remove("dark");
    body.classList.add("light");
    themeIcon.classList.remove("ri-sun-fill");
    themeIcon.classList.add("ri-moon-fill");
  } else {
    // Switch to dark mode
    body.classList.remove("light");
    body.classList.add("dark");
    themeIcon.classList.remove("ri-moon-fill");
    themeIcon.classList.add("ri-sun-fill");
  }
});

// Mobile menu functionality
const hamburgerMenu = document.getElementById("hamburger-menu");
const sidebar = document.getElementById("sidebar");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu-btn");
const overlay = document.getElementById("overlay");

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

function closeMenu() {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

closeMenuBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});
