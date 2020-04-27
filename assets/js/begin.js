const popup = document.querySelector('.popup');
const beginButton = document.querySelector('#answer');

function begin() {
  popup.style.display = 'none';
 gameBegin = true;

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
