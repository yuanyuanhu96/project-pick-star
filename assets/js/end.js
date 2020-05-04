const popupEnd = document.querySelector('.popup-end');
const nextButton = document.querySelector('#next-step');

function end() {
  popupEnd.style.display = 'block';
}

function next() {}

nextButton.addEventListener('click', next);
