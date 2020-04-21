const canvas = document.querySelector('.drawing');
const ctx = canvas.getContext('2d');
const goalBox = document.querySelector('.goal-box');

const moon = new Image();
moon.onload = () => {
  drawMoon();
};
moon.src = './assets/img/moon.png';

function drawMoon() {
  ctx.drawImage(
    moon,
    0.5 * canvas.width - 90,
    0.5 * canvas.height - 90,
    180,
    180
  );
}

const rabbits = new Image();
rabbits.onload = () => {
  drawRabbits();
};
rabbits.src = './assets/img/rabbits.png';

function drawRabbits() {
  ctx.drawImage(
    rabbits,
    0.5 * canvas.width - 90,
    0.5 * canvas.height - 90,
    180,
    90
  );
}

const goal = new Goal(4);

console.log(goal);
const starsRequirement = [
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 3],
  [4, 3],
];

const stars = createStars(starsRequirement);
const claw = new Claw(stars);

//const pickedCoordinate = starCoordinate();

const tick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMoon();
  drawRabbits();
  claw.tick();
  //claw.status different from status
  // console.log("claw.status", claw.status);
  if (status === 3) {
    let rightStar = judgement(claw, goal);
    console.warn('picked the right star?', rightStar);
    status += 1;
  }

  for (var i = 0; i < stars.length; i++) {
    stars[i].tick();
  }
  console.log('status', status);
  statusUpdate();
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
