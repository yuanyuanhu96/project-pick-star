function randomCoordinate() {
  let x = Math.round(Math.random() * canvas.width);
  let y = Math.round(Math.random() * canvas.height);

  let coordinate = [x, y];
  coordinate = checkRange(coordinate);
  return coordinate;
}

function checkRange(coordinate) {
  let x = coordinate[0];
  let y = coordinate[1];

  if (x >= 150 && x <= 350 && y >= 150 && y <= 350) {
    x = Math.round(Math.random() * canvas.width);
    y = Math.round(Math.random() * canvas.height);
    coordinate = [x, y];
    coordinate = checkRange(coordinate);
  }

  return coordinate;
}

function createStars(type, number) {
  const stars = [];
  for (var i = 0; i < number; i++) {
    stars.push(new Star(0, 20));
  }
  return stars;
}
