const canvas = document.querySelector('.drawing');
const ctx = canvas.getContext('2d');
const goalBox = document.querySelector('.goal-box');
const levelBox = document.querySelector('.level-name');
const popupBegin = document.querySelector('.popup-begin');
const beginButton = document.querySelector('#answer');
const popupEnd = document.querySelector('.popup-end');
const nextButton = document.querySelector('#next-level');
const popupLose = document.querySelector('.popup-lose');
const restartButton = document.querySelector('#restart');

const statusTouch = document.querySelector('#touch-area');

let level = new Level();

// Set level start
let levelId = 1;
levelBox.innerText = `Level ${levelId}`;

function begin() {
  popupBegin.style.display = 'none';
  level.timer.startGame();
  gameBegin = true;
}

function end() {

  level.claw.status = 0;
  level.claw.removeStar();
  let win = ifWin();
  if (win === true) {
    popupEnd.style.display = 'block';
  } else {
    popupLose.style.display = 'block';
  }
}

function ifWin() {
  if (level.goal.achivedNumber > 0) {
    return true;
  } else {
    return false;
  }
}

function next() {
  popupEnd.style.display = 'none';
  level.goal.hide();
  level = new Level();
  levelId += 1;
  levelBox.innerText = `Level ${levelId}`;

  popupBegin.style.display = 'block';
}

beginButton.addEventListener('click', begin);
nextButton.addEventListener('click', next);

statusTouch.addEventListener('click', (event) => {
  level.claw.nextStatus();
});
