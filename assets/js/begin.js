const popupBegin = document.querySelector('.popup-begin');
const beginButton = document.querySelector('#answer');
const popupEnd = document.querySelector('.popup-end');

function begin() {
  popupBegin.style.display = 'none';
  startGame();
  gameBegin = true;
}

function end() {
  popupEnd.style.display = 'block';
}

beginButton.addEventListener('click', begin);

//I cannot make it work within Class

// class Begin {
//   popup;
//   beginButton;

//   constructor() {
//     this.popup = document.querySelector('.popup');
//     this.beginButton = document.querySelector('#answer');
//   }

//   begin() {
//     this.popup.style.display = 'none';
//   }

//   this.beginButton.addEventListener('click', this.begin);

// }
