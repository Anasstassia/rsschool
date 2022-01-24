import { drive, startEngine } from './car-api';

export const addAnimationListeners = () => {
    const startBtn = document.querySelectorAll<HTMLElement>('.green-btn');
    const stopBtn = document.querySelectorAll<HTMLElement>('.red-btn');

    startBtn.forEach((el) =>
        el.addEventListener('click', async () => {
            const i = Number(el.parentElement?.parentElement?.parentElement?.id.slice(3));
            const { time } = await startDriving(i);
            const carImg = document
                .querySelector<HTMLImageElement>(`#car${i}`)
                ?.querySelector<HTMLImageElement>('.car');
            if (!carImg || carImg.style.animation) return;
            carImg.style.animation = `car-move ${time}ms`;
            try {
                drive(i);
            } catch (e) {
                console.log(e);
            }
            setTimeout(() => {
                carImg.style.animation = ``;
            }, 3000);
        })
    );

    stopBtn.forEach((el) =>
        el.addEventListener('click', () => {
            const i = Number(el.parentElement?.parentElement?.parentElement?.id.slice(3));
            const carImg = document
                .querySelector<HTMLImageElement>(`#car${i}`)
                ?.querySelector<HTMLImageElement>('.car');
            if (!carImg) return;
            carImg.style.animation = ``;
        })
    );
};

const startDriving = async (id: number) => {
    const { velocity, distance } = await startEngine(id);
    const time = Math.round(distance / velocity);
    return { time };
};
