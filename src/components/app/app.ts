import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    constructor(private controller: AppController, private view: AppView) {
        this.controller = new AppContrxoller();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
