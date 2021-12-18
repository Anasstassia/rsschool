export default class Router {
  pages = {
    welcome: document.querySelector('.welcome-page-block'),
    settings: document.querySelector('.settings-block'),
    author: document.querySelector('.artist-quiz-block'),
    picture: document.querySelector('.picture-quiz-block'),
    pictureQuiz: document.querySelector('.picture-question-block'),
    authorQuiz: document.querySelector('.artist-question-block'),
    roundResult: document.querySelector('.round-result-block'),
  };

  currentRoute = null;

  constructor(initialRoute) {
    this.link(initialRoute);
  }

  link(route) {
    if (this.pages[route]) {
      Object.values(this.pages).forEach((page) => page.classList.add('hidden'));
      this.pages[route].classList.remove('hidden');
      this.pages[route].classList.add('animated');

      setTimeout(() => {
        this.pages[route].classList.remove('animated');
      }, 3000);
      this.currentRoute = route;
    }
  }
}
export const router = new Router('welcome');
