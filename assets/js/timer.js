let time = 60;

const timerElement = document.querySelector('.timer');
const playElement = document.querySelector('.play');
const pauseElement = document.querySelector('.pause');
let timerPID;
updateTimer();

function updateTimer() {
  timerElement.innerText = `00:${String(time).padStart(2, '0')}`;
  time--;

  if (time <= 0) {
    clearInterval(timerPID);
    // FIXME: Update this.
    alert('GAME ENDED');
  }
}

function togglePlayPause() {
  if (playElement.style.display === 'none') {
    pauseElement.style.display = 'none';
    playElement.style.display = 'block';
  } else {
    pauseElement.style.display = 'block';
    playElement.style.display = 'none';
  }
}

function startGame(event) {
  timerPID = setInterval(() => {
    updateTimer();
  }, 1000);

  togglePlayPause();
}

function pauseGame() {
  clearInterval(timerPID);
  togglePlayPause();
}

playElement.addEventListener('click', startGame);
pauseElement.addEventListener('click', pauseGame);
