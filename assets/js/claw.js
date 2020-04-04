// console.log('claw loaded');
class Claw {
  //what dose this called, why comma,function or parameters? status recorder

  status = 0; // 0: begin place 1: turning 2 releasing
  fixedEnd = { x1: 250, y1: 250 };

  angle;
  initialAngle = 1; //   angle; speed; 变量应该放在哪？不用initial可以吗
  turningSpeed = 0.05;
  turningTime = 0;

  length;
  initialLength = 50;
  growingSpeed = 1;
  growingTime = 0;

  flexibleEnd = { x2: 250, y2: 250 };

  //???这个括号里的究竟是什么,"if undefined"
  constructor(status, turningSpeed, turningTime, growingSpeed, growingTime) {
    // console.log('constructing claw');
    // this.getEnd();
    // 初始化可以单独一个函数
    this.draw();
  }

  //???order of status check
  statusCheck() {
    if (status == 1) {
      this.turningTime += 1; //???为什么不能写这里getAngle();
    }
    if (status == 2) {
      this.growingTime += 1;
    }
  }

  getLength() {
    let length = this.initialLength + this.growingSpeed * this.growingTime;
    //console.log('length is', length);
    return length;
  }

  getAngle() {
    let angle = this.initialAngle + this.turningSpeed * this.turningTime;
    //console.log('angle is', angle);
    return angle;
  }

  //？？？用this是不是不太好
  getEnd() {
    this.flexibleEnd.x2 = this.fixedEnd.x1 + this.length * Math.cos(this.angle);
    this.flexibleEnd.y2 = this.fixedEnd.y1 + this.length * Math.sin(this.angle);
  }

  //draw path from fixedEnd to flexibleEnd
  draw() {
    // console.log('drawing claw');
    // console.log('x1 =', this.fixedEnd.x1);
    // console.log('y1 =', this.fixedEnd.y1);
    // console.log('x2 =', this.flexibleEnd.x2);
    // console.log('y2 =', this.flexibleEnd.y2);
    ctx.beginPath();
    ctx.moveTo(this.fixedEnd.x1, this.fixedEnd.y1);
    ctx.lineTo(this.flexibleEnd.x2, this.flexibleEnd.y2);
    ctx.strokeStyle = 'black';
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
