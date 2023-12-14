let timerInterval;
let isTimerRunning = false;
let totalTimeInSeconds;
let pausedTimeInSeconds = 0;
let currentSound = null;

export function startTimer(totalTime, updateDisplay, onTimerEnd) {
  if (!isTimerRunning) {
    totalTimeInSeconds = totalTime;

    timerInterval = setInterval(() => {
      const newMinutes = Math.floor(totalTimeInSeconds / 60);
      const newSeconds = totalTimeInSeconds % 60;

      updateDisplay(newMinutes, newSeconds);

      if (totalTimeInSeconds <= 0) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        onTimerEnd();
      }

      totalTimeInSeconds--; // Mantenha esta linha aqui
    }, 1000);

    isTimerRunning = true;
  }
}

export function resetTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  totalTimeInSeconds = 0;
  pausedTimeInSeconds = 0;
}

export function toggleTimer(updateDisplay, onTimerEnd) {
  if (isTimerRunning) {
    clearInterval(timerInterval);
    isTimerRunning = false;
    pausedTimeInSeconds = totalTimeInSeconds; // Armazenando o tempo restante quando o temporizador é pausado
  } else {
    startTimer(totalTimeInSeconds, updateDisplay, onTimerEnd); // Retomando o temporizador com totalTimeInSeconds
  }
}

export function adjustTimer(seconds, updateDisplay, onTimerEnd) {
  totalTimeInSeconds += seconds;
  if (totalTimeInSeconds < 0) {
    totalTimeInSeconds = 0;
  }

  const newMinutes = Math.floor(totalTimeInSeconds / 60);
  const newSeconds = totalTimeInSeconds % 60;

  updateDisplay(newMinutes, newSeconds);

  if (isTimerRunning) {
    isTimerRunning = false;
    clearInterval(timerInterval);
    startTimer(totalTimeInSeconds, updateDisplay, onTimerEnd);
  }
}

function playSound(sound) {
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
