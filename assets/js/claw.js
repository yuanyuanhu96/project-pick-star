// console.log('claw loaded');

class Claw {
  status = 0; // 0: begin place 1: turning 2 releasing

  //what dose this called, why comma
  //function or parameters? status recorder

  fixedEnd = {
    x1: 250,
    y1: 250
  };

  //   angle; speed; 变量应该放在哪？
  //不用initial可以吗
  initialAngle = 1;
  turningSpeed = 0.1;
  turningTime = 0;

  length;
  initialLength = 50;
  growingSpeed = 1;
  growingTime = 0;
  //

  flexibleEnd = {
    x2: 250,
    y2: 250
  };

  //if undefined?//这个括号里的究竟是什么
  constructor(status, turningSpeed, turningTime, growingSpeed, growingTime) {
    // console.log('constructing claw');
    //    this.getEnd();
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

  //order of status check
  statusCheck() {
    // status = window.status;
    // console.log('claw status', status);
    // console.log('window.status', window.status);
    if (status == 1) {
      this.turningTime += 1;
      //为什么不能写这里getAngle();
    }

    if (status == 2) {
      this.growingTime += 1;
    }
  }

  getLength() {
    let length = this.initialLength + this.growingSpeed * this.growingTime;
    console.log('length is', length);
    return length;
  }

  getAngle() {
    let angle = this.initialAngle + this.turningSpeed * this.turningTime;
    console.log('angle is', angle);
    this.flexibleEnd.x2 = this.fixedEnd.x1 + this.length * Math.cos(angle);

    this.flexibleEnd.y2 = this.fixedEnd.y1 + this.length * Math.sin(angle);
  }

  //   getEnd() {
  //     let length = this.initialLength + this.growingSpeed * this.growingTime;
  //     console.log('length is', length);
  //     this.flexibleEnd.x2 = this.fixedEnd.x1 + length;
  //     this.flexibleEnd.y2 = this.fixedEnd.y1 + length;
  //   }

  //draw path from fixedEnd and lexibleEnd
  draw() {
    console.log('drawing claw');

    ctx.beginPath();
    // console.log('x1 =', this.fixedEnd.x1);
    // console.log('y1 =', this.fixedEnd.y1);
    // console.log('x2 =', this.flexibleEnd.x2);
    // console.log('y2 =', this.flexibleEnd.y2);

    ctx.moveTo(this.fixedEnd.x1, this.fixedEnd.y1);
    ctx.lineTo(this.flexibleEnd.x2, this.flexibleEnd.y2);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }

  tick() {
    this.statusCheck();
    this.length = this.getLength();

    this.getAngle();

    //   this.getEnd();
    this.draw();
  }
}
