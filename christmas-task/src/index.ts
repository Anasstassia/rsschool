import slider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './scss/style.scss';

const sliderCount = slider.create(document.querySelector('#count-slider'), {
    range: {
        min: 1,
        max: 12,
    },
    step: 1,
    start: [1, 12],
    connect: true,
});

const sliderYear = slider.create(document.querySelector('#year-slider'), {
    range: {
        min: 1940,
        max: 2021,
    },
    step: 1,
    start: [1940, 2021],
    connect: true,
});
