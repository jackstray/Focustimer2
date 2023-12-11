export default {
  minutes: 25,
  seconds: 0,
  isRunning: false,
  isMute: true,
};

export const resetTimer = () => {
  timer.minutes = 25;
  timer.seconds = 0;
  timer.isRunning = false;
  timer.isMute = true;
};
