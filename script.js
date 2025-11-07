const personagem = document.getElementById("personagem");
let posX = 50; // posição inicial
const velocidade = 5; // pixels por movimento

// --- FUNÇÕES DE MOVIMENTO ---
function moverDireita() {
  posX += velocidade;
  if(posX > window.innerWidth - personagem.offsetWidth) posX = window.innerWidth - personagem.offsetWidth;
  personagem.style.left = posX + "px";
}

function moverEsquerda() {
  posX -= velocidade;
  if(posX < 0) posX = 0;
  personagem.style.left = posX + "px";
}

// --- TECLADO (PC) ---
document.addEventListener("keydown", function(event) {
  if(event.key === "ArrowRight") moverDireita();
  if(event.key === "ArrowLeft") moverEsquerda();
});

// --- BOTÕES (CELULAR) ---
document.getElementById("left").addEventListener("touchstart", moverEsquerda);
document.getElementById("right").addEventListener("touchstart", moverDireita);
document.getElementById("left").addEventListener("mousedown", moverEsquerda);
document.getElementById("right").addEventListener("mousedown", moverDireita);

// --- SWIPE (CELULAR, opcional) ---
let startX = 0;
document.addEventListener("touchstart", e => startX = e.touches[0].clientX);
document.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if(endX > startX + 30) moverDireita();
  if(endX < startX - 30) moverEsquerda();
});
