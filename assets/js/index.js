const canvas = document.querySelector('.drawing');
const ctx = canvas.getContext('2d');
const goalBox = document.querySelector('.goal-box');
const levelBox = document.querySelector('.level-name');

let levelId = 1;
levelBox.innerText = `Level ${levelId}`;

let level = new Level();
