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
  //claw.status different from status
  // console.log("claw.status", claw.status);
  if (status === 3) {
    let rightStar = judgement(claw, goal);
    console.warn(rightStar);
  }

  for (var i = 0; i < stars.length; i++) {
    stars[i].tick();
  }
  console.log('status', status);
  window.requestAnimationFrame(tick);
};

tick();

function judgement(claw, goal) {
  // console.log(claw);
  // console.log(goal);

  if (claw.starPicked.type === goal.type) {
    return true;
  }
  return false;
}
