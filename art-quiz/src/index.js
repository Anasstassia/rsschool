// import soundsList from "./sounds";
// import json from "./data.json";

/* -----------------------------------Settings------------------------------------------------- */
const volumeButton = document.querySelector('.volume-button');
const fromSett = document.querySelector('.left-arrow');
const welcomePage = document.querySelector('.welcome-page-block');
const settingsPage = document.querySelector('.settings-block');
const settingsBtn = document.querySelector('.settings-icon');
const audio = new Audio();
const valueTimer = document.getElementById('valueTimer');
let timerValue = 10;
const timerRightBtn = document.querySelector('.right-btn');
const timerLeftBtn = document.querySelector('.left-btn');

// вкл выкл звук
volumeButton.addEventListener('click', () => {
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeButton.classList.add('volume-mute');
  } else {
    volumeButton.classList.remove('volume-mute');
  }
});

// переход в настройки
settingsBtn.addEventListener('click', () => {
  settingsPage.classList.remove('hidden');
  welcomePage.classList.add('hidden');
});

// преход на велком

fromSett.addEventListener('click', () => {
  settingsPage.classList.add('hidden');
  welcomePage.classList.remove('hidden');
});

// счетчик кликов для таймера
timerRightBtn.addEventListener('click', () => {
  if (timerValue < 30) {
    timerValue += 5;
  }
  valueTimer.innerHTML = timerValue;
});

timerLeftBtn.addEventListener('click', () => {
  if (timerValue > 5) {
    timerValue -= 5;
  }
  valueTimer.innerHTML = timerValue;
});

// LocalStorage
// function saveToLocalStorage(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }
