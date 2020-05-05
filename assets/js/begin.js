const popupBegin = document.querySelector('.popup-begin');
const beginButton = document.querySelector('#answer');

function begin() {
  popupBegin.style.display = 'none';
  level.timer.startGame();
  gameBegin = true;
}

beginButton.addEventListener('click', begin);

//I cannot make it work within Class

