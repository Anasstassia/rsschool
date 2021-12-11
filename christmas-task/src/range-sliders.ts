import slider from 'nouislider';
export const init = () => {
    const sliderCount = slider.create(document.querySelector('#count-slider'), {
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
            leftCount.textContent = String(arr[0]);
            rightCount.textContent = String(arr[1]);
        }
    });

    const sliderYear = slider.create(document.querySelector('#year-slider'), {
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
            leftYear.textContent = String(arr[0]);
            rightYear.textContent = String(arr[1]);
        }
    });
};
