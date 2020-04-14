let a = 10;
let b = 20;

function add(a, b) {
  return a + b;
}

const sum = add(a, b);

class Animal {
  constructor() {}

  speak(sound) {
    console.log(sound);
  }

  eat() {}
}

class Human {
  dog;

  constructor() {
    this.dog = new Animal();
  }

  giveFoodToPets() {
    this.dog.eat();
  }
}
