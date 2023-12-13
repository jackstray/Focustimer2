import {
  toggleTimer,
  resetTimer,
  startTimer,
  adjustTimer,
} from "./Focustimer/timer.js";

import {
  treeSound,
  rainSound,
  fireSound,
  storeSound,
} from "./Focustimer/sound.js";

const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const playButton = document.getElementById("playButton");
const pauseButton = document.querySelector(".ph-play-pause");

playButton.addEventListener("click", () => {
  resetTimer(); // Resetando para 25 minutos
  startTimer(
    25 * 60, // 25 minutos em segundos
    updateDisplay,
    onTimerEnd
  );
});

pauseButton.addEventListener("click", () => {
  toggleTimer(updateDisplay, onTimerEnd);
});

const addButton = document.querySelector(".ph-caret-double-up");
const subtractButton = document.querySelector(".ph-caret-double-down");

addButton.addEventListener("click", () => {
  adjustTimer(
    5 * 60, // Adicionando 5 minutos
    updateDisplay,
    onTimerEnd
  );
});

subtractButton.addEventListener("click", () => {
  adjustTimer(
    -5 * 60, // Subtraindo 5 minutos
    updateDisplay,
    onTimerEnd
  );
});

function updateDisplay(newMinutes, newSeconds) {
  minutesElement.textContent = newMinutes.toString().padStart(2, "0");
  secondsElement.textContent = newSeconds.toString().padStart(2, "0");
}

// Quando o temporizador chegar a 0, pare todos os sons
function onTimerEnd() {
  treeSound.pause();
  treeSound.currentTime = 0;
  rainSound.pause();
  rainSound.currentTime = 0;
  fireSound.pause();
  fireSound.currentTime = 0;
  storeSound.pause();
  storeSound.currentTime = 0;
}
