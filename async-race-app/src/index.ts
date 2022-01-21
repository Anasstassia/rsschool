import './index.css';
import { renderMainHtml } from './html-render';
import { initState } from './state';
import { changePages, generateRandomCars } from './listeners';
import createControlPanel from './control-panel';

(async () => {
    await initState();
    renderMainHtml();
    createControlPanel();

    changePages();
    generateRandomCars();
})();
