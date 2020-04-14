class Goal {
  totalType;
  goal;
  achiveGoal;

  constructor(totalType) {
    this.totalType = totalType;
    this.achiveGoal = false;
    this.goal = this.generateGoal(totalType);
    goalBox.innerText = this.goal;
  }

  generateGoal(totalType) {
    //this.goal = getRandomIntInclusive(0, totalType);

    let goal = Math.floor(Math.random() * (totalType + 1));
    return goal;
  }

  printGoal() {}

  achiveGoal() {}
}
