// Scroll-to-Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    if (scrollTopBtn) scrollTopBtn.style.display = "block";
  } else {
    if (scrollTopBtn) scrollTopBtn.style.display = "none";
  }
};

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");

if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (sunIcon && moonIcon) {
      sunIcon.style.opacity = isDark ? "0" : "1";
      moonIcon.style.opacity = isDark ? "1" : "0";
    }
  });
}

// On load: apply saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (toggle) toggle.checked = true;

    if (sunIcon && moonIcon) {
      sunIcon.style.opacity = "0";
      moonIcon.style.opacity = "1";
    }
  }
});
