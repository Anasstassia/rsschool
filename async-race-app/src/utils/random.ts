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

export const generateRandomCar = () => ({ name: getRandomName(), color: getRandomColor() });
