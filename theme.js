const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  const isDark = theme === "dark";
  root.classList.toggle("theme-dark", isDark);
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Attiva tema chiaro" : "Attiva tema scuro"
  );
  localStorage.setItem("theme", isDark ? "dark" : "light");

  const meta = document.getElementById("theme-color-meta");
  if (meta) meta.setAttribute("content", isDark ? "#0f2744" : "#ffffff");
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  applyTheme(saved === "dark" ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {
  const isDark = root.classList.contains("theme-dark");
  applyTheme(isDark ? "light" : "dark");
});

initTheme();
