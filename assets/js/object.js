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
  constructor(type, radius, x, y) {
    console.log('constructing an object');
    this.type = type;
    this.radius = radius;

    if (x !== undefined) {
      this.x = x;
    } else {
      this.x = 0.2 * canvas.width;
    }

    if (y !== undefined) {
      this.y = y;
    } else {
      this.y = 0.2 * canvas.width;
    }
    console.log('canvas.width', canvas.width);

    console.log(this);
  }
}
