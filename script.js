// Configuração principal: número com código do Brasil + DDD + telefone, somente dígitos.
const WHATSAPP_NUMBER = "5585996576410";
const DEFAULT_MESSAGE = "Olá! Gostaria de conversar sobre as aulas particulares de Matemática.";

function buildWhatsAppUrl(number, message) {
  const normalized = String(number).replace(/\D/g, "");
  if (!/^\d{12,13}$/.test(normalized)) return "https://wa.me/";
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = buildWhatsAppUrl(WHATSAPP_NUMBER, DEFAULT_MESSAGE);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
      menuToggle.focus();
    }
  });
}
