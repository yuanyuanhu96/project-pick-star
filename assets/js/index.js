const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');

const starsRequirement = [
  [0, 250],
  [1, 250],
  [2, 250],
  [3, 250],
];

const pickedCoordinate = starCoordinate();
const stars = createStars(starsRequirement, pickedCoordinate);

const claw = new Claw(stars);

const tick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  claw.tick();

  for (var i = 0; i < stars.length; i++) {
    stars[i].tick();
  }
  console.log('status', status);
  window.requestAnimationFrame(tick);
};

tick();
