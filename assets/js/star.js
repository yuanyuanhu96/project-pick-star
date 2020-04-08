console.log('object loaded');
class Star {
  type;
  radius;
  x;
  y;

  constructor(type, radius, x, y) {
    console.log('constructing an object');
    this.type = type;
    this.radius = radius;

    if (x !== undefined) {
      this.x = x;
    } else {
      this.x = Math.round(Math.random() * canvas.width);
    }

    if (y !== undefined) {
      this.y = y;
    } else {
      this.y = Math.round(Math.random() * canvas.height);
    }

    console.log(this);
    this.drawCircle();
  }

  drawCircle() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  tick() {
    this.drawCircle();
  }
}
