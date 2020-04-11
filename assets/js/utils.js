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

//为什么不能相互调用 需要优化
function checkRange(coordinate) {
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
    let x = Math.round(Math.random() * realWidth) + r;
    let y = Math.round(Math.random() * realHeight) + r;
    coordinate = [x, y];
    coordinate = checkRange(coordinate);
  }

  return coordinate;
}

function createStars(type, number) {
  const stars = [];
  for (var i = 0; i < number; i++) {
    stars.push(new Star(type, 20));
  }
  return stars;
}
