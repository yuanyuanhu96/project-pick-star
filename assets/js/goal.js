class Goal {
  totalType;
  type;
  achiveGoal;

  constructor(totalType) {
    this.totalType = totalType;
    this.achiveGoal = false;
    this.type = this.generateGoal(totalType);
    goalBox.innerText = this.type;
  }

  generateGoal(totalType) {
    //this.goal = getRandomIntInclusive(0, totalType);

    let type = Math.floor(Math.random() * (totalType + 1));
    return type;
  }

  printGoal() {}

  achiveGoal() {}
}
