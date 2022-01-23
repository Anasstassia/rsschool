import { fillUpdateForm, renderMainHtml } from './html-render';
import { deleteCar } from './car-api';
import { renderGeneratedCars } from './utils/random';
import { setCurrentId, state } from './state';

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

export const handleClickSelect = () => {
    const selectBtn = document.querySelectorAll<HTMLElement>('.btn-select');
    selectBtn.forEach((el) => {
        el.addEventListener('click', () => {
            const id = Number(el.parentElement?.parentElement?.id.slice(3));
            setCurrentId(id);
            fillUpdateForm();
        });
    });
};

export const changeGaragePage = async () => {
    const prevBtn = document.querySelector('.previous');
    const nextBtn = document.querySelector('.next');
    const count = state.cars?.length;
    const CARS_PER_PAGE = 7;
    const maxPage = Math.ceil((count && count / CARS_PER_PAGE) || 1);

    nextBtn?.addEventListener('click', () => {
        if (state.currentPage < maxPage) {
            state.currentPage += 1;
        } else {
            state.currentPage = maxPage;
        }
        renderMainHtml();
    });

    prevBtn?.addEventListener('click', () => {
        if (state.currentPage > 1) {
            state.currentPage -= 1;
        } else {
            state.currentPage = 1;
        }
        renderMainHtml();
    });
};
