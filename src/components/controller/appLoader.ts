import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'a12ecd76842a4e57bfbd432a94be1a4c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
