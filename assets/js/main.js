const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");

menuToggle?.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const saved = localStorage.getItem("theme");
if (saved === "dark") document.documentElement.dataset.theme = "dark";

function updateTheme() {
  themeToggle.textContent = document.documentElement.dataset.theme === "dark" ? "☀" : "☾";
}
updateTheme();

themeToggle?.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme === "dark";
  if (dark) {
    delete document.documentElement.dataset.theme;
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  }
  updateTheme();
});

document.getElementById("year").textContent = new Date().getFullYear();
