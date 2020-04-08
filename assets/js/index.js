const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');

var stars = createStars(0, 20);
const claw = new Claw(stars);




const tick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  claw.tick();

  for (var i = 0; i < stars.length; i++) {
    stars[i].tick();
  }

  window.requestAnimationFrame(tick);
};

tick();
