const popupEnd = document.querySelector('.popup-end');
const nextButton = document.querySelector('#next-level');

function end() {
  status = 0;
  popupEnd.style.display = 'block';
  level.claw.removeStar();
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
