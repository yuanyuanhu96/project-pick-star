const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');

const claw = new Claw();

const object = new Object(0, 20);
const object2 = new Object(0, 20);
const object3 = new Object(0, 20);
//console.log('object', object);

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


