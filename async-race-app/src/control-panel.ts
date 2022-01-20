import { createCar } from './car-api';
import { renderCar } from './html-render';

const renderPanel = () => ``; // TODO: crate func for panel

const createControlPanel = () => {
    renderPanel();
    const createCarForm = document.getElementById('create');
    createCarForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nameCar = document.querySelector<HTMLInputElement>('.input')?.value;
        const colorCar = document.querySelector<HTMLInputElement>('.color')?.value;
        const containerCar = document.querySelector('.garage-container');

        if (nameCar && colorCar) {
            const newCar = {
                color: `${colorCar}`,
                name: `${nameCar}`,
            };
            const createdCar = await createCar(newCar);
            const element = document.createElement('div');
            element.innerHTML = renderCar(createdCar);
            containerCar?.appendChild(element);
        }
    });
};

export default createControlPanel;
