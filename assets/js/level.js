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
      if (status === 3) {
        let rightStar = this.judgement();
        console.warn('picked the right star?', rightStar);
        if (rightStar == true) {
          this.goal.updateAchieved();
        }
        status = 4;
      }

      for (var i = 0; i < this.stars.length; i++) {
        this.stars[i].tick();
      }
      console.log('status', status);
      statusUpdate();
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
}
