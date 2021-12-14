import slider from 'nouislider';
export const init = () => {
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
                }
            }
        });

        const sliderYear = slider.create(sliderYearElement, {
            range: {
                min: 1940,
                max: 2021,
            },
            step: 1,
            start: [1940, 2021],
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
                }
            }
        });
    }
};
