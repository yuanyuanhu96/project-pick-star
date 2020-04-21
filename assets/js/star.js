class Star {
  type;
  radius;
  x;
  y;
  coordinate;

  star1;
  star2;
  star3;
  star4;
  star5;

  constructor(type, radius, x, y) {
    this.type = type;
    this.radius = radius;
    this.coordinate = randomCoordinate();

    if (x !== undefined) {
      this.x = x;
    } else {
      this.x = this.coordinate[0];
    }

    if (y !== undefined) {
      this.y = y;
    } else {
      this.y = this.coordinate[1];
    }

    //console.log(this);
    this.loadImages();
    // this.drawCircle();
  }

  loadImages() {
    this.star1 = new Image();
    this.star1.onload = () => {
      this.drawStar();
    };
    this.star1.src = './assets/img/stars/star-01.png';

    this.star2 = new Image();
    this.star2.onload = () => {
      this.drawStar();
    };
    this.star2.src = './assets/img/stars/star-02.png';

    this.star3 = new Image();
    this.star3.onload = () => {
      this.drawStar();
    };
    this.star3.src = './assets/img/stars/star-03.png';

    this.star4 = new Image();
    this.star4.onload = () => {
      this.drawStar();
    };
    this.star4.src = './assets/img/stars/star-04.png';

    this.star5 = new Image();
    this.star5.onload = () => {
      this.drawStar();
    };
    this.star5.src = './assets/img/stars/star-05.png';
  }

  drawStar() {
    ctx.beginPath();
    let starImg;
    switch (this.type) {
      case 0:
        starImg = this.star1;
        break;

      case 1:
        starImg = this.star2;
        break;

      case 2:
        starImg = this.star3;
        break;

      case 3:
        starImg = this.star4;
        break;

      case 4:
        starImg = this.star5;
        break;

      default:
        break;
    }

    ctx.drawImage(starImg, this.x - 40, this.y - 40, 80, 80);
  }

  // drawCircle() {
  //   ctx.beginPath();
  //   ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);

  //   switch (this.type) {
  //     case 0:
  //       ctx.strokeStyle = 'red';
  //       break;

  //     case 1:
  //       ctx.strokeStyle = 'green';
  //       break;

  //     case 2:
  //       ctx.strokeStyle = 'orange';
  //       break;

  //     case 3:
  //       ctx.strokeStyle = 'blue';
  //       break;

  //     default:
  //       ctx.strokeStyle = 'black';
  //       break;
  //   }

  //   ctx.lineWidth = 2;
  //   ctx.stroke();
  // }

  tick() {
    //this.drawCircle();
    this.drawStar();
  }
}
