function starCoordinate() {
  const r = 20;

  const avaliableCoordinate = [];
  const pickedCoordinate = [];

  //Generate all avaliable Coordinate
  for (var ix = r; ix < canvas.width - r; ix++) {
    for (var iy = r; iy < canvas.height - r; iy++) {
      //eliminate all center coordinate
      if (
        ix >= 0.5 * canvas.width - 80 &&
        ix <= 0.5 * canvas.width + 80 &&
        iy >= 0.5 * canvas.height - 80 &&
        iy <= 0.5 * canvas.height + 80
      ) {
      } else {
        avaliableCoordinate.push([ix, iy]);
      }
    }
  }

  //Pick from avaliable Coordinate
  function pick(number) {
    for (var i = 0; i < number; i++) {
      randomIndex = Math.round(Math.random() * avaliableCoordinate.length);
      pickedCoordinate.push(avaliableCoordinate[randomIndex]);
    }
  }

  pick(1000);
  console.log(pickedCoordinate);
  return pickedCoordinate;
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

function createStars(starsRequirement, pickedCoordinate) {
  const stars = [];

  starsRequirement.forEach((element) => {
    var type = element[0];
    var number = element[1];

    for (var i = 0; i < number; i++) {
      let coordinate = pickedCoordinate.pop();
      let x = coordinate[0];
      let y = coordinate[1];
      stars.push(new Star(type, 20, x, y));
    }
  });

  return stars;
}

// function createStars(starsRequirement) {
//   const stars = [];

//   starsRequirement.forEach((element) => {
//     var type = element[0];
//     var number = element[1];

//     for (var i = 0; i < number; i++) {
//       stars.push(new Star(type, 20));
//     }
//   });

//   return stars;
// }
