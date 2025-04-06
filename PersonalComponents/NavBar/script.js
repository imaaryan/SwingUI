// Theme toggle functionality
const desktopThemeToggle = document.getElementById("desktop-theme-toggle");
const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
const themeIcons = document.querySelectorAll(".theme-toggle i");
const body = document.body;

function toggleTheme() {
  if (body.classList.contains("dark")) {
    // Switch to light mode
    body.classList.remove("dark");
    body.classList.add("light");
    themeIcons.forEach((icon) => {
      icon.classList.remove("ri-sun-fill");
      icon.classList.add("ri-moon-fill");
    });
  } else {
    // Switch to dark mode
    body.classList.remove("light");
    body.classList.add("dark");
    themeIcons.forEach((icon) => {
      icon.classList.remove("ri-moon-fill");
      icon.classList.add("ri-sun-fill");
    });
  }
}

desktopThemeToggle.addEventListener("click", toggleTheme);
mobileThemeToggle.addEventListener("click", toggleTheme);

// Mobile menu functionality
const hamburgerBtn = document.getElementById("hamburger-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const mobileServicesDropdown = document.getElementById(
  "mobile-services-dropdown"
);
const mobileServicesContent = document.getElementById(
  "mobile-services-content"
);

hamburgerBtn.addEventListener("click", () => {
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

// Mobile dropdown toggle
mobileServicesDropdown.addEventListener("click", (e) => {
  e.preventDefault();
  mobileServicesContent.classList.toggle("active");
  const arrow = mobileServicesDropdown.querySelector("i");
  if (mobileServicesContent.classList.contains("active")) {
    arrow.classList.remove("ri-arrow-down-s-line");
    arrow.classList.add("ri-arrow-up-s-line");
  } else {
    arrow.classList.remove("ri-arrow-up-s-line");
    arrow.classList.add("ri-arrow-down-s-line");
  }
});
