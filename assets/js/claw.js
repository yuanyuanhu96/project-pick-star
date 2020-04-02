console.log('claw loaded');

class Claw {
  status = 0;

  //what dose this called, why comma
  //function or parameters? status recorder
  fixedEnd = {
    x1: 250,
    y1: 250
  };

  //   angle; speed; 变量应该放在哪？
  angle = 0;
  length = 0;
  growingSpeed = 1;
  growingTime = 100;
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

  statusRecorder() {}

  tick() {}

  turn() {}

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

  getEnd() {
    length = this.growingSpeed * this.growingTime;
    console.log('length is', length);
    this.flexibleEnd.x2 = this.fixedEnd.x1 + length;
    console.log('x2 =', this.flexibleEnd.x2);
    this.flexibleEnd.y2 = this.fixedEnd.y1 + length;
    console.log('y2 =', this.flexibleEnd.y2);
  }

  //draw path from fixedEnd and lexibleEnd
  draw() {
    console.log('drawing claw');

    ctx.beginPath();
    ctx.moveTo(this.fixedEnd.x1, this.fixedEnd.y1);
    ctx.lineTo(this.flexibleEnd.x2, this.flexibleEnd.y2);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
}
