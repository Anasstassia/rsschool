import { createCar } from '../car-api';
import { renderCar } from '../html-render';
import { brandsCars } from './constants/brands-cars';
import { modelsCars } from './constants/models-cars';

const getRandomName = () => {
    const brand = brandsCars[Math.floor(Math.random() * modelsCars.length)];
    const model = modelsCars[Math.floor(Math.random() * modelsCars.length)];
    return `${brand} ${model}`;
};

const getRandomColor = () => {
    const symbols = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const generateRandomCar = (count = 100) =>
    new Array(count).fill(1).map(() => ({ name: getRandomName(), color: getRandomColor() }));

export const renderGeneratedCars = () => {
    const generatedCars = generateRandomCar();
    const containerCar = document.querySelector('.garage-container');
    generatedCars.map(async (car) => {
        const createdCar = await createCar(car);
        const element = document.createElement('div');
        element.innerHTML = renderCar(createdCar);
        containerCar?.appendChild(element);
    });
};
