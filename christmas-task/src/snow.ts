const container = document.querySelector('.snowflakes');
const snowBtn = document.querySelector('.snowfall');
let clicks = 0;
let repeater: NodeJS.Timer;

snowBtn?.addEventListener('click', () => {
    snowBtn?.classList.toggle('active-btn');
    clicks++;
    if (clicks % 2 === 0) {
        clearInterval(repeater);
    } else {
        repeater = setInterval(createSnowFlake, 50);
    }
});

export function createSnowFlake() {
    const snowFlake = document.createElement('i');
    snowFlake.classList.add('fas');
    snowFlake.classList.add('fa-snowflake');
    snowFlake.style.left = Math.random() * window.innerWidth + 'px';
    snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowFlake.style.opacity = `${Math.random()}`;
    snowFlake.style.fontSize = Math.random() * 10 + 10 + 'px';

    container?.appendChild(snowFlake);

    setTimeout(() => {
        snowFlake.remove();
    }, 6000);
}
