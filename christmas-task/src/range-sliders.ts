import slider from 'nouislider';
import ToysList from './toys-list';

export const init = (toys: ToysList) => {
    const sliderCountElement = document.querySelector<HTMLElement>('#count-slider');
    const sliderYearElement = document.querySelector<HTMLElement>('#year-slider');
    if (sliderCountElement && sliderYearElement) {
        const sliderCount = slider.create(sliderCountElement, {
            range: {
                min: 1,
                max: 12,
            },
            step: 1,
            start: [1, 12],
            connect: true,
            format: {
                to: (value) => value.toFixed(0),
                from: (value) => parseInt(value, 10),
            },
        });

        const leftCount = document.querySelector('.left-count');
        const rightCount = document.querySelector('.right-count');

        sliderCount.on('change', () => {
            const arr = sliderCount.get();
            if (Array.isArray(arr)) {
                if (leftCount && rightCount) {
                    leftCount.textContent = String(arr[0]);
                    rightCount.textContent = String(arr[1]);
                    toys.filterByCount(+arr[0], +arr[1]);
                }
            }
        });

        const sliderYear = slider.create(sliderYearElement, {
            range: {
                min: 1940,
                max: 2020,
            },
            step: 1,
            start: [1940, 2020],
            connect: true,
            format: {
                to: (value) => value.toFixed(0),
                from: (value) => parseInt(value, 10),
            },
        });

        const leftYear = document.querySelector('.left-year');
        const rightYear = document.querySelector('.right-year');

        sliderYear.on('change', () => {
            const arr = sliderYear.get();
            if (Array.isArray(arr)) {
                if (leftYear && rightYear) {
                    leftYear.textContent = String(arr[0]);
                    rightYear.textContent = String(arr[1]);
                    toys.filterByYear(+arr[0], +arr[1]);
                }
            }
        });

        // сброс всех настроек
        const buttonReset = document.querySelector('.reset');
        const buttonsShape = document.querySelectorAll('.shapes button');
        const buttonsColor = document.querySelectorAll('.colors button');
        const inputs = document.querySelectorAll<HTMLInputElement>('.sizes input');
        const input = document.querySelector<HTMLInputElement>('.fav input');

        buttonReset?.addEventListener('click', () => {
            sliderYear.reset();
            sliderCount.reset();
            buttonsShape.forEach((el) => {
                el.classList.remove('active');
            });
            buttonsColor.forEach((el) => {
                el.classList.remove('active');
            });
            inputs.forEach((el) => {
                const elem = el;
                elem.checked = false;
            });
            if (input) {
                input.checked = false;
            }
        });
    }
};
