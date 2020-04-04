const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');

const claw = new Claw();
//object = new Object(0, 20, 50, 60);
const object = new Object(0, 20);
const multiObjects = new MultiObjects(0, 20);

const tick = () => {
  //console.log('Tick', tick);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  claw.tick();
  object.tick();
  multiObjects.tick();

  window.requestAnimationFrame(tick);
};

tick();
