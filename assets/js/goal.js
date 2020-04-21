class Goal {
  totalType;
  type;
  achiveGoal;

  constructor(totalType) {
    this.totalType = totalType;
    this.achiveGoal = false;

    this.type = this.generateGoal(this.totalType);

    console.log(`goal is ${this.type}`);
    //选择HTML中的element展示
    const starElement = document.querySelector(`.goal-star-${this.type + 1}`);
    starElement.style.display = 'block';
  }

  //函数里面只要写右边的表达式
  generateGoal(totalType) {
    return Math.floor(Math.random() * (totalType + 1));
  }

  printGoal() {}

  achiveGoal() {}
}
