const popupEnd = document.querySelector('.popup-end');
const nextButton = document.querySelector('#next-level');

function end() {
  popupEnd.style.display = 'block';
}

function next() {
  popupEnd.style.display = 'none';
  level = new Level();
}

nextButton.addEventListener('click', next);
