function starCoordinate() {
  const avaliableCoordinate = [];
  for (var ix = 0; ix < canvas.width; ix++) {
    for (var iy = 0; iy < canvas.width; iy++) {
      avaliableCoordinate.push([ix, iy]);
    }
  }
  console.log(avaliableCoordinate);
}

function randomCoordinate() {
  const r = 20;
  let realWidth = canvas.width - 2 * r;
  let realHeight = canvas.height - 2 * r;

  let x = Math.round(Math.random() * realWidth) + r;
  let y = Math.round(Math.random() * realHeight) + r;

  let coordinate = [x, y];
  coordinate = checkRange(coordinate);
  return coordinate;
}

//
function checkRange(coordinate, stars) {
  const r = 20;
  let realWidth = canvas.width - 2 * r;
  let realHeight = canvas.height - 2 * r;

  let x = coordinate[0];
  let y = coordinate[1];

  if (
    x >= 0.5 * canvas.width - 80 &&
    x <= 0.5 * canvas.width + 80 &&
    y >= 0.5 * canvas.height - 80 &&
    y <= 0.5 * canvas.height + 80
  ) {
    x = Math.round(Math.random() * realWidth) + r;
    y = Math.round(Math.random() * realHeight) + r;
    coordinate = [x, y];
    coordinate = checkRange(coordinate);
  }

  return coordinate;
}

// function checkOverlap(coordinate, stars) {
//   let stars = stars;
//   const r = 20;
//   let realWidth = canvas.width - 2 * r;
//   let realHeight = canvas.height - 2 * r;

//   let x = coordinate[0];
//   let y = coordinate[1];

//   for (var i = 0; i < stars.length; i++) {
//     let distanceX = Math.abs(this.stars[i].x - x);
//     let distanceY = Math.abs(this.stars[i].y - y);

//     if (distanceX < 20 && distanceY < 20) {
//       x = Math.round(Math.random() * realWidth) + r;
//       y = Math.round(Math.random() * realHeight) + r;
//       coordinate = [x, y];
//       coordinate = checkRange(coordinate);
//     }
//   }

//   return coordinate;
// }

function createStars(starsRequirement) {
  const stars = [];

  starsRequirement.forEach((element) => {
    var type = element[0];
    var number = element[1];

    for (var i = 0; i < number; i++) {
      stars.push(new Star(type, 20));
    }
  });

  return stars;
}
