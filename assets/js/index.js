const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');

const claw = new Claw();

const object = new Star(0, 20);
//console.log('object', object);

var objects = new Array();
objects[0] = new Star(0, 20);
objects[1] = new Star(0, 20);
objects[2] = new Star(0, 20);

const multiObjects = new MultiObjects(0, 5);
console.log('MultiObjects is', multiObjects);

//const objectsList = new ObjectsList(0, 3);

const tick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  claw.tick();
  object.tick();

  for (var i = 0; i < objects.length; i++) {
    objects[i].tick();
  }

  multiObjects.tick();
  window.requestAnimationFrame(tick);
};

tick();
