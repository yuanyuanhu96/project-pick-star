class Timer {
  constructor() {
    this.time = 30;

    this.timerElement = document.querySelector('.timer');
    this.playElement = document.querySelector('.play');
    this.pauseElement = document.querySelector('.pause');
    this.timerPID;
    this.updateTimer();

    this.playElement.addEventListener('click', this.startGame);
    this.pauseElement.addEventListener('click', this.pauseGame);
  }

  updateTimer() {
    this.timerElement.innerText = `00:${String(this.time).padStart(2, '0')}`;
    this.time--;

    if (this.time <= 0) {
      clearInterval(this.timerPID);
      // FIXME: Update this.
      // alert('GAME ENDED');
      end();
    }
  }

  togglePlayPause() {
    if (this.playElement.style.display === 'none') {
      this.pauseElement.style.display = 'none';
      this.playElement.style.display = 'block';
    } else {
      this.pauseElement.style.display = 'block';
      this.playElement.style.display = 'none';
    }
  }

  startGame(event) {
    this.timerPID = setInterval(() => {
      this.updateTimer();
    }, 1000);

    this.togglePlayPause();
  }

  pauseGame() {
    clearInterval(this.timerPID);
    this.togglePlayPause();
  }
}
