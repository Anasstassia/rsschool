import json from './data.json';
import soundsList from './sounds';

/* eslint-disable import/prefer-default-export */
export const getItem = (key) => JSON.parse(localStorage.getItem(key));

export const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export function getQuestions() {
  const questionByAuthor = [];
  const questionByPictures = [];
  json.forEach((item, index) => {
    if (index < 120) {
      questionByAuthor.push(item);
    } else {
      questionByPictures.push(item);
    }
  });
  return [questionByAuthor, questionByPictures];
}

export function chunkArray(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

// eslint-disable-next-line import/no-mutable-exports
export const timer = { current: 0 };

export function startTimer() {
  const seconds = getItem('timer');

  const intervalID = setInterval(() => {
    if (timer.stop) {
      timer.current = 0;
      return;
    }
    if (timer.current > seconds) {
      clearInterval(intervalID);
    }
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = `${(timer.current / seconds) * 100}%`;
    document.querySelector('.seconds .time').textContent = `${
      seconds - timer.current
    }`;
    timer.current += 1;
  }, 1000);
}

export function checkerAnswer(trueAnswer, currentAnswer) {
  const popUp = document.querySelector('.check-answer');
  const audio = new Audio();
  audio.muted = getItem('isMuted');

  popUp.querySelector(
    '.picture-answer'
  ).style.backgroundImage = `url(https://raw.githubusercontent.com/Anasstassia/image-data/master/img/${trueAnswer.imageNum}.jpg)`;
  popUp.querySelector('.name').innerHTML = trueAnswer.name;
  popUp.querySelector(
    '.info'
  ).innerHTML = `${trueAnswer.author}, ${trueAnswer.year}`;

  if (currentAnswer.truthy) {
    audio.src = soundsList[0].src; // win
    audio.play();
    popUp.classList.remove('hidden');
    popUp.classList.add('animatedTwo');
    setTimeout(() => {
      popUp.classList.remove('animatedTwo');
    }, 3000);
    popUp.classList.remove('falsy');
  } else {
    audio.src = soundsList[1].src; // lose
    audio.play();
    popUp.classList.remove('hidden');
    popUp.classList.add('animatedTwo');
    setTimeout(() => {
      popUp.classList.remove('animatedTwo');
    }, 3000);
    popUp.classList.add('falsy');
  }
}

export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) +
  Math.ceil(min);

export const shuffle = (array) => {
  const arr = array;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
