const popupEnd = document.querySelector('.popup-end');
const nextButton = document.querySelector('#next-level');

function end() {
  popupEnd.style.display = 'block';
}

function next() {
  popupEnd.style.display = 'none';
  level.goal.hide();
  level = new Level();
  levelId += 1;
  levelBox.innerText = `Level ${levelId}`;

  popupBegin.style.display = 'block';
}

nextButton.addEventListener('click', next);
