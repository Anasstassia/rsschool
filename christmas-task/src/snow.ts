const container = document.querySelector('.snowflakes');
const snowBtn = document.querySelector('.snowfall');
let clicks = 0;
let repeater: NodeJS.Timer;

snowBtn?.addEventListener('click', () => {
    // const repeater = setInterval(createSnowFlake, 50);
    snowBtn?.classList.toggle('active-btn');
    clicks++;
    console.log(clicks);
    if (clicks % 2 === 0) {
        clearInterval(repeater);
    } else {
        repeater = setInterval(createSnowFlake, 50);
    }
});

export function createSnowFlake() {
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake');
    snow_flake.style.left = Math.random() * window.innerWidth + 'px';
    snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snow_flake.style.opacity = `${Math.random()}`;
    snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';

    container?.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove();
    }, 6000);
}
