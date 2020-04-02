const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');

console.log('hi');

const claw = new Claw();

const tick = () => {
  console.log('Tick', tick);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  claw.tick();

  window.requestAnimationFrame(tick);
};

tick();
