import { getItem, chunkArray, getQuestions } from './helpers';
import { router } from './router';
import Quiz from './quiz';

const volumeButton = document.querySelector('.volume-button');
const volumeSlider = document.querySelector('.volume-slider');
const fromSett = document.querySelector('.left-arrow');
const artistsBtn = document.querySelector('.artist-quiz');
const picturesBtn = document.querySelector('.pictures-quiz');
const home = document.querySelector('.go-home');
const homeTwo = document.querySelector('.go-home_2');
const closeOne = document.querySelector('.close');
const closeTwo = document.querySelector('.closeTwo');
const settingsBtn = document.querySelector('.settings-icon');
const audio = new Audio();
const saveButton = document.querySelector('#saveSettings');
const arrow = document.querySelector('.arrow');
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

volumeButton.addEventListener('click', () => {
  audio.muted = !audio.muted;

  if (audio.muted) {
    volumeButton.classList.add('volume-mute');
  } else {
    volumeButton.classList.remove('volume-mute');
  }
  localStorage.setItem('isMuted', audio.muted);
});

volumeSlider.addEventListener(
  'click',
  (e) => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth, 10);
    audio.volume = newVolume;
    document.querySelector('.volume-percentage').style.width = `${
      newVolume * 100
    }%`;
  },
  false
);

settingsBtn.addEventListener('click', () => {
  router.link('settings');
});

fromSett.addEventListener('click', () => {
  router.link('welcome');
});

home.addEventListener('click', () => {
  router.link('welcome');
});

homeTwo.addEventListener('click', () => {
  router.link('welcome');
});

artistsBtn.addEventListener('click', () => {
  router.link('author');
});

picturesBtn.addEventListener('click', () => {
  router.link('picture');
});

closeOne.addEventListener('click', () => {
  router.link('author');
});
closeTwo.addEventListener('click', () => {
  router.link('picture');
});
arrow.addEventListener('click', () => {
  router.link('author');
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
    document.querySelector('.timeline').classList.toggle('visibility');
    document.querySelector('.seconds').classList.toggle('visibility');
  }

  audio.muted = getItem('isMuted');

  timerValue = getItem('timer');
  valueTimer.innerHTML = timerValue;
});

// создаем блок для художников

const [questionByAuthor, questionByPictures] = getQuestions();

const authorRounds = chunkArray(questionByAuthor, 10);
const pictureRounds = chunkArray(questionByPictures, 10);

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
const previewTemplate = document.querySelector('#previewTemplate');

dataArtistsBlock.forEach((el, i) => {
  const newRound = artistsTemplate.cloneNode(true);
  newRound.setAttribute('id', i);
  newRound.classList.add('gray');
  newRound.querySelector('#roundId').innerHTML = el.title;
  newRound.querySelector('#imgId').src = el.img;
  newRound.querySelector('#pId').innerHTML = `${el.score}/10`;
  newRound.addEventListener('click', () => {
    const quiz = new Quiz(authorRounds[i], 'author', i);
    console.log(quiz);
  });
  container.appendChild(newRound);

  const scores = getItem('score');
  if (scores && (scores[i] || scores[i] === 0)) {
    document
      .getElementById(i)
      .querySelector('#pId').innerHTML = `${scores[i]}/10`;
    document.getElementById(i).classList.remove('gray');
  }
});

artistsTemplate.remove();

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
  newRound.classList.add('gray');
  newRound.querySelector('#roundId').innerHTML = el.title;
  newRound.querySelector('#imgId').src = el.img;
  newRound.querySelector('#pId').innerHTML = `${el.score}/10`;

  newRound.addEventListener('click', () => {
    const quiz = new Quiz(pictureRounds[i], 'picture', i);
    console.log(quiz);
  });
  picturesContainer.appendChild(newRound);
});
picturesTemplate.remove();

document.querySelectorAll('.star').forEach((el, i) =>
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    router.link('roundResult');
    document.querySelector('.round-result-block .template-inner').innerHTML =
      previewTemplate.innerHTML;

    authorRounds[i].forEach((round) => {
      const newPreview = previewTemplate.cloneNode(true);
      newPreview.classList.add('gray');
      newPreview.style.backgroundImage = `url(https://raw.githubusercontent.com/Anasstassia/image-data/master/img/${round.imageNum}.jpg)`;
      document.querySelector('.template-inner').appendChild(newPreview);
    });
    previewTemplate.remove();
  })
);
