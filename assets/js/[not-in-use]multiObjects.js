// console.log('object loaded');

// class MultiObjects {
//   type;
//   needCreate;
//   created = 0;
//   objects;

//   constructor(type, needCreate) {
//     this.type = type;
//     this.needCreate = needCreate;
//     this.objects = new Array();
//     this.objects[0] = new window.Object(0, 40);
//     this.objects[1] = new window.Object(0, 40);
//     this.objects[2] = new window.Object(0, 40);
//     console.log('MultiObjects created', this.objects);
//   }

//   objectConstructor(type, radius, x, y) {
//     console.log('constructing an object');
//     this.type = type;
//     this.radius = radius;

//     if (x !== undefined) {
//       this.x = x;
//     } else {
//       this.x = Math.round(Math.random() * canvas.width);
//     }

//     if (y !== undefined) {
//       this.y = y;
//     } else {
//       this.y = Math.round(Math.random() * canvas.height);
//     }

//     console.log(this);

//     this.drawCircle();
//   }

//   drawCircle() {
//     console.log(
//       'drawing a circle from the object in multiObject',
//       this.radius,
//       this.x,
//       this.y
//     );
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//     ctx.strokeStyle = 'green';
//     ctx.lineWidth = 2;
//     ctx.stroke();
//   }

//   tick() {
//     this.drawCircle();
//   }
// }

// class MultiObjects {
//   needCreate;
//   type;
//   created = 0;

//   constructor(needCreate, type) {
//     this.needCreate = needCreate;
//     this.type = type;
//     this.createObjects();
//   }

//   createObjects() {
//     if (this.created <= this.needCreate) {
//       const object = new window.Object(0, 20);
//       this.created += 1;
//       this.createObjects();
//     }
//   }
// }
