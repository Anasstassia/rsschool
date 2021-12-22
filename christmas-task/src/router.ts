type TKey = keyof Router['pages'];

export default class Router {
    pages = {
        welcome: document.querySelector('.wrapper-welcome-page'),
        main: document.querySelector('.wrapper-main-page'),
        tree: document.querySelector('.wrapper-tree-page'),
    };

    currentRoute: TKey | null = null;

    constructor(initialRoute: TKey) {
        this.link(initialRoute);
    }

    link(route: TKey) {
        if (this.pages[route]) {
            Object.values(this.pages).forEach((page) => page?.classList.add('hidden'));
            this.pages[route]?.classList.remove('hidden');
            this.currentRoute = route;
        }
    }
}
export const router = new Router('welcome');
