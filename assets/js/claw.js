class Claw {
  stars;
  status = 0; // 0:Haven't start, 1:turning, 2:growing, 3:pick 4:pickback 5: emptyback 6:starback 7:no star back 8:starRemoved
  fixedEnd = {
    x1: 0.5 * canvas.width,
    y1: 0.5 * canvas.height,
  };

  angle;
  initialAngle = 1;
  turningSpeed = 0.05;
  turningTime = 0;

  length = 80;
  initialLength = 80;
  growingSpeed = 1;
  growingTime = 0;

  flexibleEnd = {
    x2: 250,
    y2: 250,
  };

  touchStar = false;

  starPicked;
  starPickedId;

  constructor(stars) {
    this.stars = stars;
    this.draw();
  }

  clawChanging() {
    if (status === 1) {
      this.turningTime += 1;
    }
    if (status === 2) {
      this.growingTime += 1;
    }

    if (status === 4 || status === 5) {
      this.growingTime -= 1;
    }
  }

  getLength() {
    let length = this.initialLength + this.growingSpeed * this.growingTime;

    if (length <= this.initialLength) {
      if (status === 4) {
        status = 6;
      }
      if (status === 5) {
        status = 7;
      }

      this.clawReturned();
      //  concole.log(growingTime);
    }

    return length;
  }

  getAngle() {
    let angle = this.initialAngle + this.turningSpeed * this.turningTime;
    return angle;
  }

  getEnd() {
    this.flexibleEnd.x2 = this.fixedEnd.x1 + this.length * Math.cos(this.angle);
    this.flexibleEnd.y2 = this.fixedEnd.y1 + this.length * Math.sin(this.angle);
    if (
      this.flexibleEnd.x2 <= 0 ||
      this.flexibleEnd.x2 >= canvas.width ||
      this.flexibleEnd.y2 <= 0 ||
      this.flexibleEnd.y2 >= canvas.height
    ) {
      status = 5;
    }
  }

  //draw path from fixedEnd to flexibleEnd

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.fixedEnd.x1, this.fixedEnd.y1);
    ctx.lineTo(this.flexibleEnd.x2, this.flexibleEnd.y2);
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 5;
    ctx.stroke();
  }

  ifTouchStar() {
    //need to end while true
    for (var i = 0; i < this.stars.length; i++) {
      let distanceX = Math.abs(this.stars[i].x - this.flexibleEnd.x2);
      let distanceY = Math.abs(this.stars[i].y - this.flexibleEnd.y2);

      if (status == 2 && distanceX < 20 && distanceY < 20) {
        this.touchStar = true;
        this.starPickedId = i;
        this.starPicked = this.stars[i];
        level.uponPick();
        this.moveStar();
        status = 4;
      }
    }
  }

  moveStar() {
    let i = this.starPickedId;
    this.stars[i].x = this.flexibleEnd.x2;
    this.stars[i].y = this.flexibleEnd.y2;
  }

  removeStar() {
    let i = this.starPickedId;
    let removedStar = this.stars.splice(i, 1);
    this.starPickedId = null;
  }

  clawReturned() {
    if (status === 6) {
      this.removeStar();
      status = 0;
      this.growingTime = 0;
    }

    if (status === 7) {
      status = 0;
      this.growingTime = 0;
    }
  }

  tick() {
    this.clawChanging();
    this.length = this.getLength();
    this.angle = this.getAngle();
    this.getEnd();
    this.draw();

    if (status === 2) {
      this.ifTouchStar();
    }

    if (status === 4) {
      this.moveStar();
    }
  }
}
