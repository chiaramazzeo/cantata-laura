const toggle = document.querySelector(".menu-toggle");
const panel = document.getElementById("menu-panel");
const overlay = document.querySelector("[data-menu-overlay]");
const closeBtn = document.querySelector(".menu-close");
const links = panel.querySelectorAll("a");

function openMenu() {
  panel.hidden = false;
  overlay.hidden = false;
  toggle.setAttribute("aria-expanded", "true");
  toggle.setAttribute("aria-label", "Chiudi indice brani");
  overlay.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => {
    document.body.classList.add("menu-open");
  });
  closeBtn.focus();
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Apri indice brani");
  overlay.setAttribute("aria-hidden", "true");
  window.setTimeout(() => {
    panel.hidden = true;
    overlay.hidden = true;
  }, 280);
  toggle.focus();
}

toggle.addEventListener("click", () => {
  if (panel.hidden) openMenu();
  else closeMenu();
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !panel.hidden) closeMenu();
});
