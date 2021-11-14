export default class Router {
  pages = {
    welcome: document.querySelector('.welcome-page-block'),
    settings: document.querySelector('.settings-block'),
  };

  currentRoute = null;

  constructor(initialRoute) {
    this.link(initialRoute);
  }

  link(route) {
    if (this.pages[route]) {
      Object.values(this.pages).forEach((page) => page.classList.add('hidden'));
      this.pages[route].classList.remove('hidden');
      this.currentRoute = route;
    }
  }
}
