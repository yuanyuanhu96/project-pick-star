class Claw {
  status = 0;
  fixedEnd = { x1: 250, y1: 250 };

  angle;
  initialAngle = 1;
  turningSpeed = 0.05;
  turningTime = 0;

  length;
  initialLength = 50;
  growingSpeed = 1;
  growingTime = 0;

  flexibleEnd = { x2: 250, y2: 250 };

  constructor(status, turningSpeed, turningTime, growingSpeed, growingTime) {
    this.draw();
  }

  statusCheck() {
    if (status == 1) {
      this.turningTime += 1;
    }
    if (status == 2) {
      this.growingTime += 1;
    }
  }

  getLength() {
    let length = this.initialLength + this.growingSpeed * this.growingTime;
    return length;
  }

  getAngle() {
    let angle = this.initialAngle + this.turningSpeed * this.turningTime;
    return angle;
  }

  getEnd() {
    this.flexibleEnd.x2 = this.fixedEnd.x1 + this.length * Math.cos(this.angle);
    this.flexibleEnd.y2 = this.fixedEnd.y1 + this.length * Math.sin(this.angle);
  }

  //draw path from fixedEnd to flexibleEnd

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.fixedEnd.x1, this.fixedEnd.y1);
    ctx.lineTo(this.flexibleEnd.x2, this.flexibleEnd.y2);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.stroke();
  }

  tick() {
    this.statusCheck();
    this.length = this.getLength();
    this.angle = this.getAngle();
    this.getEnd();
    this.draw();
  }
}
