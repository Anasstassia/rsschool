import { INews } from '../../types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ISources } from '../../types';
class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document.querySelector('.sources').addEventListener('click', (e: MouseEvent) => {
            this.controller.getNews(e, (data: ISources) => this.view.drawNews(data as INews));
            const element = document.getElementById('onNews');
            element.scrollIntoView(true);
        });
        this.controller.getSources((data: ISources) => this.view.drawSources(data));
    }
}

export default App;
