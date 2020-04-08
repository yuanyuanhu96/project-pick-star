class Star {
  type;
  radius;
  x;
  y;
  coordinate;

  constructor(type, radius, x, y) {
    this.type = type;
    this.radius = radius;
    this.coordinate = randomCoordinate();

    if (x !== undefined) {
      this.x = x;
    } else {
      this.x = this.coordinate[0];
    }

    if (y !== undefined) {
      this.y = y;
    } else {
      this.y = this.coordinate[1];
    }

    //console.log(this);
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
