// import soundsList from "./sounds";
// import json from "./data.json";
import { getItem } from './helpers';
import Router from './router';

const router = new Router('welcome');
/* -----------------------------------Settings------------------------------------------------- */
const volumeButton = document.querySelector('.volume-button');
const fromSett = document.querySelector('.left-arrow');
const artistsBtn = document.querySelector('.artist-quiz');
const picturesBtn = document.querySelector('.pictures-quiz');

const settingsBtn = document.querySelector('.settings-icon');
const audio = new Audio();
const saveButton = document.querySelector('#saveSettings');

const valueTimer = document.getElementById('valueTimer');
let timerValue = 10;
const timerRightBtn = document.querySelector('.right-btn');
const timerLeftBtn = document.querySelector('.left-btn');

const timerTrue = document.querySelector('#yes');
const timerFalse = document.querySelector('#no');

timerTrue.addEventListener('input', () => {
  localStorage.setItem('isTimer', true);
});

timerFalse.addEventListener('input', () => {
  localStorage.setItem('isTimer', false);
});

// вкл выкл звук
volumeButton.addEventListener('click', () => {
  audio.muted = !audio.muted;

  if (audio.muted) {
    volumeButton.classList.add('volume-mute');
  } else {
    volumeButton.classList.remove('volume-mute');
  }
  localStorage.setItem('isMuted', audio.muted);
});

// переход в настройки
settingsBtn.addEventListener('click', () => {
  router.link('settings');
});

// преход на велком
fromSett.addEventListener('click', () => {
  router.link('welcome');
});
// переход на художников
artistsBtn.addEventListener('click', () => {
  router.link('artists');
});

// переход на картины
picturesBtn.addEventListener('click', () => {
  router.link('artists');
});
// счетчик кликов для таймера
timerRightBtn.addEventListener('click', () => {
  if (timerValue < 30) {
    timerValue += 5;
  }
  valueTimer.innerHTML = timerValue;
  localStorage.setItem('timer', timerValue);
});

timerLeftBtn.addEventListener('click', () => {
  if (timerValue > 5) {
    timerValue -= 5;
  }
  valueTimer.innerHTML = timerValue;
  localStorage.setItem('timer', timerValue);
});

saveButton.addEventListener('click', () => {
  router.link('welcome');
});

// LocalStorage

window.addEventListener('load', () => {
  if (getItem('isMuted')) {
    volumeButton.classList.add('volume-mute');
  } else {
    volumeButton.classList.remove('volume-mute');
  }

  if (!getItem('isTimer')) {
    document.querySelector('#no').checked = true;
  }

  audio.muted = getItem('isMuted');

  timerValue = getItem('timer');
  valueTimer.innerHTML = timerValue;
});

// quiz.start
// quiz.end

// quiz.currentTime
// quiz.score

// создаем блок для художников

const dataArtistsBlock = [
  { title: 'Round 1', img: './assets/png/forRounds/r1.png', score: 0 },
  { title: 'Round 2', img: './assets/png/forRounds/r2.png', score: 0 },
  { title: 'Round 3', img: './assets/png/forRounds/r3.png', score: 0 },
  { title: 'Round 4', img: './assets/png/forRounds/r4.png', score: 0 },
  { title: 'Round 5', img: './assets/png/forRounds/r5.png', score: 0 },
  { title: 'Round 6', img: './assets/png/forRounds/r6.png', score: 0 },
  { title: 'Round 7', img: './assets/png/forRounds/r1.png', score: 0 },
  { title: 'Round 8', img: './assets/png/forRounds/r2.png', score: 0 },
  { title: 'Round 9', img: './assets/png/forRounds/r3.png', score: 0 },
  { title: 'Round 10', img: './assets/png/forRounds/r4.png', score: 0 },
  { title: 'Round 11', img: './assets/png/forRounds/r5.png', score: 0 },
  { title: 'Round 12', img: './assets/png/forRounds/r6.png', score: 0 },
];

const artistsTemplate = document.querySelector('#artistsTemplate');
const container = document.querySelector('.artist-quiz-block-inner');
dataArtistsBlock.forEach((el, i) => {
  const newRound = artistsTemplate.cloneNode(true);
  newRound.setAttribute('id', i);
  newRound.querySelector('#roundId').innerHTML = el.title;
  newRound.querySelector('#imgId').src = el.img;
  newRound.querySelector('#pId').innerHTML = `${el.score}/10`;
  container.appendChild(newRound);
});

artistsTemplate.remove();

// создаем блок для картин

const dataPicturesBlock = [
  { title: 'Round 1', img: './assets/png/forRounds/r1.png', score: 0 },
  { title: 'Round 2', img: './assets/png/forRounds/r2.png', score: 0 },
  { title: 'Round 3', img: './assets/png/forRounds/r3.png', score: 0 },
  { title: 'Round 4', img: './assets/png/forRounds/r4.png', score: 0 },
  { title: 'Round 5', img: './assets/png/forRounds/r5.png', score: 0 },
  { title: 'Round 6', img: './assets/png/forRounds/r6.png', score: 0 },
  { title: 'Round 7', img: './assets/png/forRounds/r1.png', score: 0 },
  { title: 'Round 8', img: './assets/png/forRounds/r2.png', score: 0 },
  { title: 'Round 9', img: './assets/png/forRounds/r3.png', score: 0 },
  { title: 'Round 10', img: './assets/png/forRounds/r4.png', score: 0 },
  { title: 'Round 11', img: './assets/png/forRounds/r5.png', score: 0 },
  { title: 'Round 12', img: './assets/png/forRounds/r6.png', score: 0 },
];

const picturesTemplate = document.querySelector('#picturesTemplate');
const picturesContainer = document.querySelector('#picturesContainer');
dataPicturesBlock.forEach((el, i) => {
  const newRound = picturesTemplate.cloneNode(true);
  newRound.setAttribute('id', i);
  newRound.querySelector('#roundId').innerHTML = el.title;
  newRound.querySelector('#imgId').src = el.img;
  newRound.querySelector('#pId').innerHTML = `${el.score}/10`;
  picturesContainer.appendChild(newRound);
});

picturesTemplate.remove();