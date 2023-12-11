import { timer, resetTimer } from "./timer.js";

let intervalId;

const play = () => {
  // Se o temporizador não estiver em execução, inicia-o
  if (!timer.isRunning) {
    resetTimer();

    // Inicia o temporizador
    intervalId = setInterval(() => {
      // Lógica do temporizador...
      if (timer.seconds === 0) {
        if (timer.minutes === 0) {
          clearInterval(intervalId);
          console.log("Timer finished!");
          // Adicione a lógica para quando o temporizador atingir zero
        } else {
          timer.minutes--;
          timer.seconds = 59;
        }
      } else {
        timer.seconds--;
      }

      // Adicione a lógica para atualizar a exibição do temporizador no DOM
      console.log(`Time remaining: ${timer.minutes}:${timer.seconds}`);
    }, 1000);

    timer.isRunning = true;
  }
};

const pause = () => {
  console.log("Pause button clicked");

  // Pausa o temporizador apenas se estiver em execução
  if (timer.isRunning) {
    clearInterval(intervalId);
    timer.isRunning = false;
  }
};

const increaseTime = () => {
  console.log("Increase button clicked");
  timer.minutes += 5;
  console.log(`Time increased: ${timer.minutes}:${timer.seconds}`);
};

const decreaseTime = () => {
  console.log("Decrease button clicked");
  // Verifica se o tempo não será menor que zero
  timer.minutes = Math.max(0, timer.minutes - 5);
  console.log(`Time decreased: ${timer.minutes}:${timer.seconds}`);
};

export { play, pause, increaseTime, decreaseTime };
