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
console.log(audio.volume);

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

const artistsTemplate = document.querySelector('#artistsTemplate'); // шаблон ячейки раунда
const container = document.querySelector('.artist-quiz-block-inner'); // контейнер для раундов
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

artistsTemplate.remove(); // убираем шаблонный раунд

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

console.log(`
10/10 вёрстка, дизайн, UI стартовой страницы приложения. Выполняются требования к вёрстке и оформлению приложения. На стартовой странице есть кнопка, при клике по которой открываются настройки викторины, и две кнопки, при кликах по которым можно выбрать тип вопроса: угадать художника по картине, угадать картину по имени её автора
10/10 реализована навигация по страницам приложения. Со стартовой страницы при клике по кнопке с типом вопроса пользователь попадает на страницу категорий выбранного типа вопросов. Со страницы категорий пользователь может вернуться на стартовую страницу приложения. Со страницы категорий при клике по карточке категории пользователь попадает на страницу с вопросами категории. На карточке сыгранной категории есть кнопка или ссылка, при клике по которой пользователь попадает на страницу с результатами прохождения раунда. Со страницы с вопросами и со страницы с результатами пользователь может вернуться на страницу категорий или на стартовую страницу приложения

10/10 в настройках есть возможность включать/выключать звук, есть регулятор громкости звука. Если звук включён, есть звуковая индикация правильных и неправильных ответов, звуковое сопровождение окончания раунда
10/10 в настройках есть возможность включать/выключать игру на время. Если выбрана игра на время, на странице с вопросами викторины отображается таймер, отсчитывающий время, которое отведено для ответа на вопрос
10/10 в настройках можно указать время для ответа на вопрос в интервале от 5 до 30 секунд с шагом в 5 секунд. Если время истекает, а ответа нет, это засчитывается как неправильный ответ на вопрос
10/10 при перезагрузке страницы приложения настройки сохраняются

10/10 вёрстка, дизайн, UI страницы категории. Выполняются требования к вёрстке и оформлению приложения. На странице категорий размещаются карточки категорий. Карточки категорий могут иметь названия, или их можно просто пронумеровать.
10/10 карточка сыгранной категории внешне отличается от карточки категории, которая ещё не игралась
10/10 на карточке сыгранной категории отображается результат прохождения раунда - количество вопросов, на которые был дан правильный ответ

10/10 вёрстка, дизайн, UI страницы с вопросами. Выполняются требования к вёрстке и оформлению приложения. Вопросы в викторине идут в том порядке, в каком информация про картины и их авторов размещается в коллекции исходных данных.
10/10 варианты ответов на вопросы генерируются случайным образом. В вариантах ответов на вопросы викторины должен быть правильный ответ и только один. Правильный ответ в разных вопросах должен находиться на разных местах, а не, например, всегда быть только первым. Варианты ответов должны быть разными. В вариантах ответов не должны повторяться картины одного и того же художника.
10/10 правильным и неправильным ответам пользователя соответствуют индикаторы разного цвета
10/10 после того, как ответ выбран, появляется модальное окно с правильным ответом на вопрос и кнопкой "Продолжить". При клике по кнопке "Продолжить" пользователь переходит к следующему вопросу категории
10/10 после окончания раунда выводится уведомление об окончании раунда и отображается результат прохождения раунда - количество вопросов, на которые был дан правильный ответ. Есть кнопка "Продолжить" при клике по которой пользователь перенаправляется на страницу категорий данного типа вопросов

10/10 вёрстка, дизайн, UI страницы с результатами. Выполняются требования к вёрстке и оформлению приложения
10/10 страница с результатами содержит превью всех картин категории
[x] картины, на вопросы про которые или про их авторов был дан правильный ответ, цветные; картины, на вопросы про которые или про их авторов был дан неправильный ответ, черно-белые
[x] при клике по картине выводится информация о ней - название, автор, год создания
[x] если раунд проигрывался повторно и результаты изменились, эти изменения отображаются на странице с результатами

[x] плавная смена изображений, картинки сначала загружаются, потом отображаются, нет ситуации, когда пользователь видит частично загрузившиеся изображения. Плавную смену изображений не проверяем: 1) при загрузке и перезагрузке приложения 2) при открытой консоли браузера

20/20 5 баллов за каждую уникальную сложную анимацию (анимация перехода по страницам, появление popUp, кнопка настроек, раунды)

[x] дополнительными баллами оценивается очень высокое качество оформления приложения, продуманность отдельных деталей интерфейса, улучшающие внешний вид приложения и удобство пользования им, а также выполненный на высоком уровне и сложный в реализации свой собственный дополнительный функционал, существенно улучшающий качество и/или возможности приложения
Итог: 180/220`);
