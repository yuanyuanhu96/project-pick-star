class Goal {
  totalType;
  type;
  achiveGoal;
  achivedNumberElement;
  achivedNumber;
  starElement;
  starElementBegin;

  constructor(totalType) {
    this.totalType = totalType;
    this.achiveGoal = false;

    this.type = this.generateGoal(this.totalType);

    console.log(`goal is ${this.type}`);
    //选择HTML中的element展示
    this.starElement = document.querySelector(
      `.goal-box .goal-star-${this.type + 1}`
    );
    this.starElementBegin = document.querySelector(
      `.goal-box-begin .goal-star-${this.type + 1}`
    );
    this.achivedNumberElement = document.querySelector('.goal-achieved');
    this.achivedNumber = this.achivedNumberElement.innerText;
    this.achivedNumber = parseInt(this.achivedNumber, 10);
    console.log('achivedNumber = ', this.achivedNumber);

    this.starElement.style.display = 'block';
    this.starElementBegin.style.display = 'block';
  }

  //函数里面只要写右边的表达式
  generateGoal(totalType) {
    return Math.floor(Math.random() * (totalType + 1));
  }

  printGoal() {}

  updateAchieved() {
    this.achivedNumber += 1;
    this.achivedNumberElement.innerText = this.achivedNumber;
  }

  hide() {
    this.starElement.style.display = 'none';
    this.starElementBegin.style.display = 'none';
  }
}
