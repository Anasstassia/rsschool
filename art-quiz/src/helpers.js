import json from './data.json';

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
