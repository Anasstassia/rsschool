import './index.css';
import { renderMainHtml } from './html-render';
import { createCar } from './api';
import { startAnimation } from './animation';
import { initState } from './state';
import { changePages } from './listeners';

(async () => {
    await initState();
    renderMainHtml();
    startAnimation();
    document.getElementById('create')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameCar = document.querySelector<HTMLInputElement>('.input')?.value;
        const colorCar = document.querySelector<HTMLInputElement>('.color')?.value;
        const containerCar = document.querySelector('.garage-container');

        if (nameCar && colorCar) {
            createCar(`${nameCar}`, `${colorCar}`);
            const element = document.createElement('div');
            containerCar?.appendChild(element);
        }
    });
    changePages();
})();
