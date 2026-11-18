// PERSONALIZE AQUI: informe seu WhatsApp com código do país + DDD + número.
// Exemplo de formato: 5585999999999 (não use espaços, parênteses ou traços).
const WHATSAPP_NUMBER = "55SEUDDDSEUNUMERO";

const whatsappButton = document.getElementById("whatsappButton");
const message = "Olá! Gostaria de saber mais sobre as aulas particulares de Matemática.";

if (whatsappButton) {
  const validNumber = /^\d{12,13}$/.test(WHATSAPP_NUMBER);
  if (validNumber) {
    whatsappButton.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  } else {
    whatsappButton.href = "https://wa.me/";
    whatsappButton.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Para ativar o contato, edite o arquivo script.js e substitua WHATSAPP_NUMBER pelo seu número com código do Brasil e DDD.");
    });
  }
}

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});
