import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'a12ecd76842a4e57bfbd432a94be1a4c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
