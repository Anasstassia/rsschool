import { IData } from '../../types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            .addEventListener('click', (e: MouseEvent) =>
                this.controller.getNews(e, (data: { sources?: { name: string; id: string }[] }) =>
                    this.view.drawNews(data as IData)
                )
            );
        this.controller.getSources((data: { sources?: { name: string; id: string }[] }) => this.view.drawSources(data));
    }
}

export default App;
