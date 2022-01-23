import './index.css';
import { renderMainHtml } from './html-render';
import { initState } from './state';

(async () => {
    await initState();
    renderMainHtml();
})();
