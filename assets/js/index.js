const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');

const claw = new Claw();


var stars = createStars(0, 10);

function createStars(type, number) {
  const stars = [];

  for (var i = 0; i < number; i++) {
    stars.push(new Star(0, 20));
  }

  return stars;
}


const tick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  claw.tick();

  for (var i = 0; i < stars.length; i++) {
    stars[i].tick();
  }

  window.requestAnimationFrame(tick);
};

tick();
