import {} from './html-render';

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