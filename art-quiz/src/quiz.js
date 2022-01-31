import { router } from './router';
import {
  getItem,
  startTimer,
  checkerAnswer,
  setItem,
  timer,
  getRandomInt,
  shuffle,
} from './helpers';
import soundsList from './sounds';

export default class Quiz {
  constructor(data, type, roundId) {
    this.data = data;
    this.tempQuestion = data;
    this.type = type;
    this.score = 0;
    this.round = 0;
    this.roundId = roundId;
    this.handleModalCallbacks = [];
    switch (type) {
      case 'picture':
        this.choice1 = document.querySelector('.variants-authors .v1');

        this.choice2 = document.querySelector('.variants-authors .v2');

        this.choice3 = document.querySelector('.variants-authors .v3');

        this.choice4 = document.querySelector('.variants-authors .v4');
        break;
      case 'author':
        this.choice1 = document.querySelector('.variants-pictures .var1');

        this.choice2 = document.querySelector('.variants-pictures .var2');

        this.choice3 = document.querySelector('.variants-pictures .var3');

        this.choice4 = document.querySelector('.variants-pictures .var4');
        break;
      default:
        break;
    }
    this.start();
  }

  start() {
    router.link(`${this.type}Quiz`);
    if (getItem('isTimer')) {
      startTimer();
      timer.stop = false;
      timer.current = 0;
    }
    this.startRound();
  }

  getVariants() {
    const answer = {
      ...this.tempQuestion[getRandomInt(0, this.tempQuestion.length - 1)],
    };
    answer.truthy = true;
    this.currentTrueAnswer = answer;

    this.tempQuestion = this.tempQuestion.filter((e) => e.name !== answer.name);
    let currentData = this.data.filter((e) => e.name !== answer.name);
    const variants = [answer];
    for (let i = 0; i < 3; i += 1) {
      const variant = currentData[getRandomInt(0, currentData.length)];
      variants.push(variant);
      currentData = currentData.filter((e) => e.name !== variant.name);
    }

    return shuffle(variants);
  }

  handleClose = () => {
    this.end();
  };

  startRound = () => {
    this.prepareToNewRound();

    [this.choice1, this.choice2, this.choice3, this.choice4].forEach(
      (el, i) => {
        this.handleModalCallbacks.push(this.handleModal(i));
        el.addEventListener('click', this.handleModalCallbacks[i]);
      }
    );

    document
      .querySelector('.next')
      .addEventListener('click', this.handleClickNext);
    document
      .querySelector('.close')
      .addEventListener('click', this.handleClose);
  };

  handleClickNext = () => {
    const popUp = document.querySelector('.check-answer');

    popUp.classList.add('hidden');
    document
      .querySelector('.artist-question-block')
      .classList.remove('opacity');
    this.handleEndOfRound();
  };

  handleModal = (i) => () => {
    window.clearInterval(this.intervalId);
    timer.current = 0;
    timer.stop = true;

    checkerAnswer(this.currentTrueAnswer, this.variants[i]);
    this.currentAnswer = this.variants[i];

    document.querySelector('.artist-question-block').classList.add('opacity');
  };

  prepareToNewRound() {
    this.intervalId = setInterval(() => {
      if (timer.current > getItem('timer')) {
        checkerAnswer(this.currentTrueAnswer, {});
        timer.stop = true;
      }
    }, 1000);
    const authorElement = document.querySelector('.question-block .author');
    const pictureElement = document.querySelector('.question-block .picture');
    this.variants = this.getVariants();
    switch (this.type) {
      case 'author':
        authorElement.innerHTML = this.currentTrueAnswer.author;
        break;
      case 'picture':
        pictureElement.style.backgroundImage = `url(https://raw.githubusercontent.com/Anasstassia/image-data/master/img/${this.currentTrueAnswer.imageNum}.jpg)`;
        break;
      default:
        break;
    }
    [this.choice1, this.choice2, this.choice3, this.choice4].forEach(
      (element, i) => {
        switch (this.type) {
          case 'author':
            Object.assign(element.style, {
              backgroundImage: `url(https://raw.githubusercontent.com/Anasstassia/image-data/master/img/${this.variants[i].imageNum}.jpg)`,
            });
            break;
          case 'picture':
            Object.assign(element, { innerHTML: `${this.variants[i].author}` });
            break;
          default:
            break;
        }
      }
    );
  }

  handleEndOfRound = () => {
    if (this.currentAnswer?.truthy) {
      this.score += 1;
    }
    timer.stop = false;
    this.round += 1;
    this.prepareToNewRound();
    if (this.round === 9) {
      this.end();
    }
  };

  end = () => {
    const homeBack = document.querySelector('.end-round');

    if (this.round === 9) {
      const audio = new Audio();
      audio.src = soundsList[2].src;
      audio.play();

      document.querySelector('.artist-question-block').classList.add('opacity');
      homeBack.classList.remove('hidden');
    }
    window.clearInterval(this.intervalId);
    timer.current = 0;
    this.round = 0;
    const storageValue = getItem('score');
    if (storageValue) {
      storageValue[this.roundId] = this.score;
      setItem('score', storageValue);
    } else {
      setItem('score', { [this.roundId]: this.score });
    }

    document.querySelector('.score-result').innerHTML = `${this.score}/10`;
    document.querySelector('.category-back').addEventListener('click', () => {
      router.link(this.type);
      document
        .querySelector('.artist-question-block')
        .classList.remove('opacity');
      homeBack.classList.add('hidden');
    });
    document
      .getElementById(this.roundId)
      .querySelector('#pId').innerHTML = `${this.score}/10`;
    document.getElementById(this.roundId).classList.remove('gray');

    [this.choice1, this.choice2, this.choice3, this.choice4].forEach(
      (choice, i) => {
        choice.removeEventListener('click', this.handleModalCallbacks[i]);
      }
    );

    document
      .querySelector('.next')
      .removeEventListener('click', this.handleClickNext);
    document
      .querySelector('.close')
      .removeEventListener('click', this.handleExit);
  };
}
