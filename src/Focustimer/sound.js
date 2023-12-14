export const treeSound = new Audio("assets/Floresta.wav");
export const rainSound = new Audio("assets/Chuva.wav");
export const fireSound = new Audio("assets/Lareira.wav");
export const storeSound = new Audio("assets/Cafeteria.wav");

let currentSound = null;

export function playSound(sound) {
  // Se um som estiver tocando, pare-o
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }

  // Inicie o novo som
  currentSound = sound;
  currentSound.loop = true;
  currentSound.play();
}

document.querySelector(".ph-tree").addEventListener("click", () => {
  playSound(treeSound);
});

document.querySelector(".ph-cloud-rain").addEventListener("click", () => {
  playSound(rainSound);
});

document.querySelector(".ph-fire").addEventListener("click", () => {
  playSound(fireSound);
});

document.querySelector(".ph-storefront").addEventListener("click", () => {
  playSound(storeSound);
});
