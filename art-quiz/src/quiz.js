import { router } from './router';
import { startTimer } from './helpers';

export default class Quiz {
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
    const answer = {
      ...this.temp[Quiz.getRandomInt(0, this.temp.length)],
      truthy: true,
    };
    this.temp.splice(this.temp.indexOf(answer), 1);
    let currentData = this.data.filter((e) => e.name !== answer.name);
    const variants = [answer];
    for (let i = 0; i < 3; i += 1) {
      const variant = currentData[Quiz.getRandomInt(0, currentData.length)];
      variants.push(variant);
      currentData = currentData.filter((e) => e.name !== variant.name);
    }

    return variants;
  }

  startRound = () => {
    const var1 = document.querySelector('.variants-pictures .var1');
    const var2 = document.querySelector('.variants-pictures .var2');
    const var3 = document.querySelector('.variants-pictures .var3');
    const var4 = document.querySelector('.variants-pictures .var4');
    const variants = Quiz.shuffle(this.getVariants());
    this.callbacks = [];
    [var1, var2, var3, var4].forEach((el, i) => {
      if (variants[i].truthy) {
        document.querySelector('.question-block .author').innerHTML =
          variants[i].author;
      }
      el.style.backgroundImage = `url(https://raw.githubusercontent.com/Anasstassia/image-data/master/img/${variants[i].imageNum}.jpg)`;
      this.callbacks.push(this.handleNextRound(variants, i));
      el.addEventListener('click', this.callbacks[i]);
    });
  };

  handleNextRound = (variants, index) => () => {
    if (variants[index].truthy) {
      this.score += 1;
    }
    this.round += 1;
    const newVariants = Quiz.shuffle(this.getVariants());
    const var1 = document.querySelector('.variants-pictures .var1');
    const var2 = document.querySelector('.variants-pictures .var2');
    const var3 = document.querySelector('.variants-pictures .var3');
    const var4 = document.querySelector('.variants-pictures .var4');
    [var1, var2, var3, var4].forEach((el, i) => {
      if (newVariants[i].truthy) {
        document.querySelector('.question-block .author').innerHTML =
          newVariants[i].author;
      }
      el.style.backgroundImage = `url(https://raw.githubusercontent.com/Anasstassia/image-data/master/img/${newVariants[i].imageNum}.jpg)`;
    });
    if (this.round === 10) {
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
    const var1 = document.querySelector('.variants-pictures .var1');
    const var2 = document.querySelector('.variants-pictures .var2');
    const var3 = document.querySelector('.variants-pictures .var3');
    const var4 = document.querySelector('.variants-pictures .var4');
    [var1, var2, var3, var4].forEach((el, i) => {
      el.removeEventListener('click', this.callbacks[i]);
    });
    router.link(this.type);
    document
      .getElementById(this.roundId)
      .querySelector('#pId').innerHTML = `${this.score}/10`;
  };
}
