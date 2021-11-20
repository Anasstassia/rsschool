import { router } from './router';
import { getItem, startTimer, checkerAnswer, setItem } from './helpers';

export default class Quiz {
  var1 = document.querySelector('.variants-pictures .var1');

  var2 = document.querySelector('.variants-pictures .var2');

  var3 = document.querySelector('.variants-pictures .var3');

  var4 = document.querySelector('.variants-pictures .var4');

  constructor(data, type, roundId) {
    this.data = data;
    this.temp = [...data];
    this.type = type;
    this.score = 0;
    this.round = 0;
    this.roundId = roundId;
    this.start();
  }

  start() {
    router.link(`${this.type}Quiz`);
    startTimer();
    this.startRound();
  }

  getVariants() {
    const answer = this.temp[Quiz.getRandomInt(0, this.temp.length)];
    console.log(this.temp);
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
    [this.var1, this.var2, this.var3, this.var4].forEach((el) => {
      el.addEventListener('click', this.handleModal);
    });
    const popUp = document.querySelector('.check-answer');

    document.querySelector('.next').addEventListener('click', () => {
      popUp.classList.add('hidden');
      document
        .querySelector('.artist-question-block')
        .classList.remove('opacity');
      this.handleEndOfRound();
    });
  };

  handleModal = (e) => {
    [this.var1, this.var2, this.var3, this.var4].forEach((el, i) => {
      if (e.target === el) {
        checkerAnswer(this.currentTrueAnswer, this.variants[i]);
        this.currentAnswer = this.variants[i];
      }
    });
    document.querySelector('.artist-question-block').classList.add('opacity');
  };

  prepareToNewRound = () => {
    this.variants = this.getVariants();
    document.querySelector('.question-block .author').innerHTML =
      this.currentTrueAnswer.author;
    [this.var1, this.var2, this.var3, this.var4].forEach((el, i) => {
      el.style.backgroundImage = `url(https://raw.githubusercontent.com/Anasstassia/image-data/master/img/${this.variants[i].imageNum}.jpg)`;
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
    // [this.var1, this.var2, this.var3, this.var4].forEach((el, i) => {
    //   el.removeEventListener('click', this.callbacks[i]);
    // });
    // this.variants = []
    const homeBack = document.querySelector('.end-round');
    homeBack.classList.remove('hidden');

    const storageValue = getItem('score');
    storageValue[this.roundId] = this.score;
    setItem('score', storageValue);

    document.querySelector('.score-result').innerHTML = `${this.score}/10`;
    document.querySelector('.category-back').addEventListener('click', () => {
      router.link(this.type);
      homeBack.classList.add('hidden');
    });
    // router.link(this.type);
    document
      .getElementById(this.roundId)
      .querySelector('#pId').innerHTML = `${this.score}/10`;
    document.getElementById(this.roundId).classList.remove('gray');
  };
}
