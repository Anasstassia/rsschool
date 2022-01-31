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
            const countValues = sliderCount.get();
            if (Array.isArray(countValues) && leftCount && rightCount) {
                const [startCount, endCount] = countValues;
                leftCount.textContent = String(startCount);
                rightCount.textContent = String(endCount);
                toys.filterByCount(+startCount, +endCount);
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
            const yearValues = sliderYear.get();
            if (Array.isArray(yearValues)) {
                if (leftYear && rightYear) {
                    const [startYear, endYear] = yearValues;
                    leftYear.textContent = String(startYear);
                    rightYear.textContent = String(endYear);
                    toys.filterByYear(+startYear, +endYear);
                }
            }
        });

        // сброс всех настроек
        const buttonReset = document.querySelector('.reset');
        const buttonsShape = document.querySelectorAll('.shapes button');
        const buttonsColor = document.querySelectorAll('.colors button');
        const sizeInputs = document.querySelectorAll<HTMLInputElement>('.sizes input');
        const isFavInput = document.querySelector<HTMLInputElement>('.fav input');

        buttonReset?.addEventListener('click', () => {
            sliderYear.reset();
            sliderCount.reset();
            buttonsShape.forEach((button) => {
                button.classList.remove('active');
            });
            buttonsColor.forEach((button) => {
                button.classList.remove('active');
            });
            sizeInputs.forEach((input) => {
                input.checked = false;
            });
            if (isFavInput) {
                isFavInput.checked = false;
            }
        });
    }
};
