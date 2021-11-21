import { router } from './router';
import { getItem, startTimer, checkerAnswer, setItem } from './helpers';
import soundsList from './sounds';

export default class Quiz {
  constructor(data, type, roundId) {
    this.data = data;
    this.temp = data;
    this.type = type;
    this.score = 0;
    this.round = 0;
    this.roundId = roundId;
    this.handleModalCallbacks = [];
    switch (type) {
      case 'picture':
        this.var1 = document.querySelector('.variants-authors .v1');

        this.var2 = document.querySelector('.variants-authors .v2');

        this.var3 = document.querySelector('.variants-authors .v3');

        this.var4 = document.querySelector('.variants-authors .v4');
        break;
      case 'author':
        this.var1 = document.querySelector('.variants-pictures .var1');

        this.var2 = document.querySelector('.variants-pictures .var2');

        this.var3 = document.querySelector('.variants-pictures .var3');

        this.var4 = document.querySelector('.variants-pictures .var4');
        break;
      default:
        break;
    }
    this.start();
  }

  start() {
    router.link(`${this.type}Quiz`);
    startTimer();
    this.startRound();
  }

  getVariants() {
    const answer = { ...this.temp[Quiz.getRandomInt(0, this.temp.length - 1)] };
    answer.truthy = true;
    this.currentTrueAnswer = answer;

    this.temp = this.temp.filter((e) => e.name !== answer.name);
    let currentData = this.data.filter((e) => e.name !== answer.name);
    const variants = [answer];
    for (let i = 0; i < 3; i += 1) {
      const variant = currentData[Quiz.getRandomInt(0, currentData.length)];
      variants.push(variant);
      currentData = currentData.filter((e) => e.name !== variant.name);
    }

    return Quiz.shuffle(variants);
  }

  startRound = () => {
    this.prepareToNewRound();
    [this.var1, this.var2, this.var3, this.var4].forEach((el, i) => {
      this.handleModalCallbacks.push(this.handleModal(i));
      el.addEventListener('click', this.handleModalCallbacks[i]);
    });

    document
      .querySelector('.next')
      .addEventListener('click', this.handleClickNext);
  };

  handleClickNext = () => {
    const popUp = document.querySelector('.check-answer');

    popUp.classList.add('hidden');
    document
      .querySelector('.artist-question-block')
      .classList.remove('opacity');
    this.handleEndOfRound();
    // startTimer();
  };

  handleModal = (i) => () => {
    checkerAnswer(this.currentTrueAnswer, this.variants[i]);
    this.currentAnswer = this.variants[i];

    document.querySelector('.artist-question-block').classList.add('opacity');
  };

  prepareToNewRound = () => {
    this.variants = this.getVariants();
    document.querySelector('.question-block .author').innerHTML =
      this.currentTrueAnswer.author;
    [this.var1, this.var2, this.var3, this.var4].forEach((el, i) => {
      const element = el;
      element.style.backgroundImage = `url(https://raw.githubusercontent.com/Anasstassia/image-data/master/img/${this.variants[i].imageNum}.jpg)`;
    });
  };

  handleEndOfRound = () => {
    if (this.currentAnswer.truthy) {
      this.score += 1;
    }
    this.round += 1;
    this.prepareToNewRound();
    if (this.round === 9) {
      this.end();
    }
  };

  static getRandomInt = (min, max) =>
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) +
    Math.ceil(min);

  static shuffle = (array) => {
    const arr = array;
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  end = () => {
    this.round = 0;

    const audio = new Audio();
    audio.src = soundsList[2].src; // lose
    audio.play();

    const homeBack = document.querySelector('.end-round');
    document.querySelector('.artist-question-block').classList.add('opacity');
    homeBack.classList.remove('hidden');

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

    [this.var1, this.var2, this.var3, this.var4].forEach((el, i) => {
      el.removeEventListener('click', this.handleModalCallbacks[i]);
    });

    document
      .querySelector('.next')
      .removeEventListener('click', this.handleClickNext);
  };
}
