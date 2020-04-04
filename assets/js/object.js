console.log('object loaded');

class Object {
  type;
  radius;
  x;
  y;

  /*I don't understand the difference between constructor(type, x, y, radius) and
  x;
  y;
  radius;
  type;
 */
  //？？？ What does constructor usually do? I didn't really make the constructer for claw
  //Do I need to make right object wrong object different class
  //???? if undefined why?

  //draw a circle for each object for test

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
    console.log(
      'drawing a circle from the object',
      this.x,
      this.y,
      this.radius
    );
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
