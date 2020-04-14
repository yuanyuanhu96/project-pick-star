const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');
const goalBox = document.querySelector('#goal-box');

const goal = new Goal(3);

console.log(goal);
const starsRequirement = [
  [0, 4],
  [1, 4],
  [2, 8],
  [3, 9],
];

const stars = createStars(starsRequirement);
const claw = new Claw(stars);

//const pickedCoordinate = starCoordinate();

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

function judgement(claw, goal) {
  let rightStar = false;
  // rightStar = claw.picked.type == goal.type;

  console.log('claw.picked.type', claw.picked.type);
  console.log('goal.type', goal.type);
  console.log('right star?', rightStar);
}
