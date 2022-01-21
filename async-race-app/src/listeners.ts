import { renderMainHtml } from './html-render';
import { deleteCar } from './car-api';
import { renderGeneratedCars } from './utils/random';

export const changePages = () => {
    const toWinners = document.querySelector('.btn-to-winners');
    const toGarage = document.querySelector('.btn-to-garage');

    toWinners?.addEventListener('click', () => {
        document.querySelector('.container')?.classList.add('hidden');
        document.querySelector('.winners-page')?.classList.remove('hidden');
    });

    toGarage?.addEventListener('click', () => {
        document.querySelector('.container')?.classList.remove('hidden');
        document.querySelector('.winners-page')?.classList.add('hidden');
    });
};

export const deleteCarElement = () => {
    const deleteBtn = document.querySelectorAll<HTMLElement>('.btn-remove');
    deleteBtn.forEach((el) => {
        el.addEventListener('click', async () => {
            const id = Number(el.parentElement?.parentElement?.id.slice(3));
            await deleteCar(id);
            renderMainHtml();
        });
    });
};

export const generateRandomCars = () => {
    const generateBtn = document.querySelector('.btn-generate');
    generateBtn?.addEventListener('click', () => {
        renderGeneratedCars();
    });
};
