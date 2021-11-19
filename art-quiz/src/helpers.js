import json from './data.json';
import soundsList from './sounds';

/* eslint-disable import/prefer-default-export */
export const getItem = (key) => JSON.parse(localStorage.getItem(key));
// формируем материал для категорий

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
  while (array.length) {
    result.push(array.splice(0, chunkSize));
  }
  return result;
}

// таймер
export function startTimer() {
  const seconds = getItem('timer');

  let current = 0;

  const intervalID = setInterval(() => {
    if (current === seconds) {
      clearInterval(intervalID);
    }
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = `${(current / seconds) * 100}%`;
    document.querySelector('.seconds .time').textContent = `${
      seconds - current
    }`;
    current += 1;
  }, 1000);
}
// startTimer(); // вызвать при переходе

export function checkerAnswer(answer) {
  const popUp = document.querySelector('.check-answer');
  // const nextBtn = document.querySelector('.next');
  const audio = new Audio();
  audio.muted = getItem('isMuted');
  if (answer.truthy) {
    audio.src = soundsList[0].src; // win
    audio.play();
    popUp.querySelector(
      '.picture-answer'
    ).style.backgroundImage = `url(https://raw.githubusercontent.com/Anasstassia/image-data/master/img/${answer.imageNum}.jpg)`;
    popUp.querySelector('.name').innerHTML = answer.name;
    popUp.querySelector('.info').innerHTML = `${answer.author}, ${answer.year}`;
    popUp.classList.remove('hidden');
    popUp.classList.remove('falsy');
  } else {
    audio.src = soundsList[1].src; // lose
    audio.play();
    popUp.querySelector(
      '.picture-answer'
    ).style.backgroundImage = `url(https://raw.githubusercontent.com/Anasstassia/image-data/master/img/${answer.imageNum}.jpg)`;
    popUp.querySelector('.name').innerHTML = answer.name;
    popUp.querySelector('.info').innerHTML = `${answer.author}, ${answer.year}`;
    popUp.classList.remove('hidden');
    popUp.classList.add('falsy');
  }
  // nextBtn.addEventListener('click', () => {
  //   popUp.classList.add('hidden');
  // });
}
