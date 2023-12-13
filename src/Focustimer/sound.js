export const treeSound = new Audio("assets/Floresta.wav");
export const rainSound = new Audio("assets/Chuva.wav");
export const fireSound = new Audio("assets/Lareira.wav");
export const storeSound = new Audio("assets/Cafeteria.wav");

// Adicione ouvintes de eventos de clique a cada botão
document.querySelector(".ph-tree").addEventListener("click", () => {
  if (treeSound.paused) {
    treeSound.play();
  } else {
    treeSound.pause();
    treeSound.currentTime = 0;
  }
});

document.querySelector(".ph-cloud-rain").addEventListener("click", () => {
  if (rainSound.paused) {
    rainSound.play();
  } else {
    rainSound.pause();
    rainSound.currentTime = 0;
  }
});

document.querySelector(".ph-fire").addEventListener("click", () => {
  if (fireSound.paused) {
    fireSound.play();
  } else {
    fireSound.pause();
    fireSound.currentTime = 0;
  }
});

document.querySelector(".ph-storefront").addEventListener("click", () => {
  if (storeSound.paused) {
    storeSound.play();
  } else {
    storeSound.pause();
    storeSound.currentTime = 0;
  }
});
