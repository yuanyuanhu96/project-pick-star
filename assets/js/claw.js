console.log('claw loaded');

class Claw {
  status = 0; // 0: begin place 1: turning 2 releasing

  //what dose this called, why comma
  //function or parameters? status recorder
  fixedEnd = {
    x1: 250,
    y1: 250
  };

  //   angle; speed; 变量应该放在哪？
  angle = 0;
  initialLength = 50;
  growingSpeed = 1;
  growingTime = 0;
  //

  flexibleEnd = {
    x2: 250,
    y2: 250
  };

  //if undefined?
  constructor(status, growingSpeed, growingTime) {
    console.log('constructing claw');
    this.getEnd();
    this.draw();
  }

  //    this.flexibleEnd.x2 = this.fixedEnd.x1 + this.length; didn't work, because of this?
  /* for  looking back
  getEnd() {
    length = this.growingSpeed * this.growingTime;
    console.log('length is', length);
    this.flexibleEnd.x2 = this.fixedEnd.x1 + this.length;
    console.log('x2 =', this.flexibleEnd.x2);

    this.flexibleEnd.y2 = this.fixedEnd.y1 + this.length;
    console.log('y2 =', this.flexibleEnd.y2);
  }
*/
  statusCheck() {
    if (this.status == 2) {
      this.growingTime += 1;
    }
  }

  getEnd() {
    length = this.initialLength + this.growingSpeed * this.growingTime;
    console.log('length is', length);
    this.flexibleEnd.x2 = this.fixedEnd.x1 + length;
    this.flexibleEnd.y2 = this.fixedEnd.y1 + length;
  }

  //draw path from fixedEnd and lexibleEnd
  draw() {
    console.log('drawing claw');

    ctx.beginPath();
    console.log('x1 =', this.fixedEnd.x1);
    console.log('y1 =', this.fixedEnd.y1);
    console.log('x2 =', this.flexibleEnd.x2);
    console.log('y2 =', this.flexibleEnd.y2);

    ctx.moveTo(this.fixedEnd.x1, this.fixedEnd.y1);
    ctx.lineTo(this.flexibleEnd.x2, this.flexibleEnd.y2);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }

  tick() {
    this.statusCheck();
    this.getEnd();
    this.draw();
  }
}
