const canvas = document.querySelector('#drawing');
const ctx = canvas.getContext('2d');

const claw = new Claw();
var stars = createStars(0, 10);

var touchStar = touchStar();
console.log('touch star?', touchStar);

function touchStar() {
  touchStar = false;
  //need to end while ture
  for (var i = 0; i < stars.length; i++) {
    distanceX = Math.abs(stars[i].x - claw.flexibleEnd.x2);
    distanceY = Math.abs(stars[i].y - claw.flexibleEnd.y2);
    if (distanceX < 20 && distanceY < 20) {
      touchStar = ture;
    }
  }
  return touchStar;
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
