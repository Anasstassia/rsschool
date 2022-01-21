import './index.css';
import { renderMainHtml } from './html-render';
import { addAnimationListeners } from './animation';
import { initState } from './state';
import { changePages, deleteCarElement, generateRandomCars } from './listeners';
import createControlPanel from './control-panel';

(async () => {
    await initState();
    renderMainHtml();
    createControlPanel();

    addAnimationListeners();

    changePages();
    deleteCarElement();
    generateRandomCars();
})();
