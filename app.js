// Seleciona o elemento da seta pelo ID
const arrow = document.getElementById("arrow");

// Adiciona um evento de rolagem na janela
window.addEventListener("scroll", () => {
  let position = window.scrollY; // Obtém a posição atual da rolagem
  // Se a posição for menor ou igual a 5 pixels
  if (position <= 5) {
    // Alterna as classes fade-in e fade-out para mostrar ou esconder a seta
    arrow.classList.toggle("fade-in");
    arrow.classList.toggle("fade-out");
  }
});
