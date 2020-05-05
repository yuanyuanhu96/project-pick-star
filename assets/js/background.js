class Background {
  constructor() {
    this.moon = new Image();
    this.moon.onload = () => {
      this.drawMoon();
    };
    this.moon.src = './assets/img/moon.png';

    this.rabbits = new Image();
    this.rabbits.onload = () => {
      this.drawRabbits();
    };
    this.rabbits.src = './assets/img/rabbits.png';
  }

  drawMoon() {
    ctx.drawImage(
      this.moon,
      0.5 * canvas.width - 90,
      0.5 * canvas.height - 90,
      180,
      180
    );
  }

  drawRabbits() {
    ctx.drawImage(
      this.rabbits,
      0.5 * canvas.width - 90,
      0.5 * canvas.height - 90,
      180,
      95
    );
  }

  tick() {
    this.drawMoon();
    this.drawRabbits();
  }
}
