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
  speed = 1;
  length = 0;
//

  flexibleEnd = {
    x2,
    y2
  };

  constructor() {
    console.log('constructing claw');
    this.draw();
  }

  statusRecorder () {}

  turn() {}

  changeEnd() {}

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
