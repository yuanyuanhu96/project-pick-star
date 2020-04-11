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

    switch (this.type) {
      case 0:
        ctx.strokeStyle = 'red';
        break;

      case 1:
        ctx.strokeStyle = 'green';
        break;

      case 2:
        ctx.strokeStyle = 'orange';
        break;

      case 3:
        ctx.strokeStyle = 'blue';
        break;

      default:
        ctx.strokeStyle = 'black';
        break;
    }

    ctx.lineWidth = 2;
    ctx.stroke();
  }

  tick() {
    this.drawCircle();
  }
}
