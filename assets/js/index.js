const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');

const starsRequirement = [
  [0, 5],
  [1, 10],
  [2, 15],
  [3, 20],
];
const stars = createStars(starsRequirement);
const claw = new Claw(stars);
starCoordinate();



const tick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  claw.tick();

  for (var i = 0; i < stars.length; i++) {
    stars[i].tick();
  }
console.log("status", status)
  window.requestAnimationFrame(tick);
};

tick();
