const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function rotate(x, y, degree) {
  ctx.translate(x, y);
  ctx.rotate((degree * Math.PI) / 180);
  ctx.translate(-x, -y);
}

// move everything
ctx.translate(100, 100);
ctx.strokeRect(0, 0, 80, 20);
ctx.translate(-100, -100);

ctx.strokeRect(100, 100, 80, 80);
// reverse it

// ctx.save();
// rotate(250+40, 250+10, 90);
// ctx.strokeStyle = "red";
// ctx.strokeRect(250, 250, 80, 20);
// ctx.restore();

// ctx.save();
// rotate(100, 120, -60);
// ctx.fillStyle = "green";
// ctx.fillRect(100, 100, 80, 20);
// ctx.restore();

// 1. set the top left of shape
let x = 100;
let y = 100;

// 2. move to top left
// First translate the context to the center you wish to rotate around.
ctx.translate(x, y);

// 3. do the rotation
ctx.rotate(45 * DEG2RAD);

// 4. move back
ctx.translate(-x, -y);

// 5. draw
ctx.fillStyle = 'red';
ctx.fillRect(x, y, 80, 20);

ctx.restore();

// Point of transform origin
//ctx.arc(20, 20, 5, 0, 2 * Math.PI);
//ctx.fillStyle = 'blue';
//ctx.fill();

// Non-rotated rectangle
//ctx.rotate(-90 * DEG2RAD);
//ctx.fillStyle = 'gray';
//ctx.fillRect(100, 100, 80, 20);

// Rotated rectangle
//ctx.rotate(45 * DEG2RAD);
//ctx.fillStyle = "red";
//ctx.fillRect(100, 0, 80, 20);

// Reset transformation matrix to the identity matrix
//ctx.setTransform(1, 0, 0, 1, 0, 0);
