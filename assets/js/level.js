class Level {
  constructor() {
    this.goal = new Goal(4);
    const starsRequirement = [
      [0, 3],
      [1, 3],
      [2, 3],
      [3, 3],
      [4, 3],
    ];
    //Play audio
    this.backgroundAudio = document.createElement('audio');
    this.backgroundAudio.src = './assets/audio/main.mp3';
    this.backgroundAudio.pause();
    this.backgroundAudio.play();

    this.bubbleAudio = document.createElement('audio');
    this.bubbleAudio.src = 'assets/audio/bubble.mp3';
    this.rightAudio = document.createElement('audio');
    this.rightAudio.src = 'assets/audio/right.mp3';

    this.stars = createStars(starsRequirement);
    this.claw = new Claw(this.stars);
    this.background = new Background();
    this.timer = new Timer();
    //this.begin = new Begin();

    //const pickedCoordinate = starCoordinate();

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.background.tick();
      this.claw.tick();
      //claw.status different from status
      // console.log("claw.status", claw.status);

      for (var i = 0; i < this.stars.length; i++) {
        this.stars[i].tick();
      }
      console.log('status', this.claw.status);

      window.requestAnimationFrame(tick);
    };

    tick();
  }

  judgement() {
    if (this.claw.starPicked.type === this.goal.type) {
      return true;
    }
    return false;
  }

  uponPick() {
    let rightStar = this.judgement();
    console.warn('picked the right star?', rightStar);
    if (rightStar == true) {
      this.goal.updateAchieved();
      this.rightAudio.play();
    }

    if (rightStar == false) {
      this.bubbleAudio.play();
    }
  }
}
