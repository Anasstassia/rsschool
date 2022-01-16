export const startAnimation = () => {
    const startBtn = document.querySelectorAll<HTMLElement>('.green-btn');
    const car = document.querySelector<HTMLImageElement>('.car');

    startBtn.forEach((el) =>
        el.addEventListener('click', () => {
            if (!car || car.style.animation) return;
            car.style.animation = `car-move 3s`;

            setTimeout(() => {
                car.style.animation = ``;
            }, 3000);
        })
    );
};
