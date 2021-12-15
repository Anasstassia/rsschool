import { INews } from '../../types';
import News from './news/news';
import Sources from './sources/sources';
import { ISources } from '../../types';
export class AppView {
    sources: Sources;
    news: News;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: INews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ISources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
