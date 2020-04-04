const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');

const claw = new Claw();
//object = new Object(0, 20, 50, 60);
const object = new Object(0, 20);
const object2 = new Object(0, 20);
const object3 = new Object(0, 20);
console.log('object', object);

//there should be a better way to create multiple object
const multiObjects = new MultiObjects(0, 20);
const objectsList = new ObjectsList(0, 3);

const tick = () => {
  //console.log('Tick', tick);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  claw.tick();
  object.tick();
  object2.tick();
  object3.tick();

  multiObjects.tick();
  window.requestAnimationFrame(tick);
};

tick();
