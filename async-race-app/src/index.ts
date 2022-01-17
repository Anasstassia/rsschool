import './index.css';
import { renderMainHtml, renderCar } from './html-render';
import { createCar } from './api';
import { startAnimation } from './animation';
import { initState } from './state';

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
            // element.innerHTML = renderCar();

            containerCar?.appendChild(element);
        }
    });
})();
