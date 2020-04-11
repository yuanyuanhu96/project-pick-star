const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');

const starsRequirement = [
  [0, 5],
  [1, 15],
  [2, 25],
  [3, 35],
];
const stars = createStars(starsRequirement);
const claw = new Claw(stars);




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
