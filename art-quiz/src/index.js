// import soundsList from "./sounds";
// import json from "./data.json";
import { getItem } from './helpers';
import Router from './router';

const router = new Router('welcome');
/* -----------------------------------Settings------------------------------------------------- */
const volumeButton = document.querySelector('.volume-button');
const fromSett = document.querySelector('.left-arrow');

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
