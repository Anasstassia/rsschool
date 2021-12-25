export const lightOn = () => {
    const COLORS = ['multi', 'red', 'blue', 'yellow', 'green'];
    const buttons = document.querySelectorAll('.garland');
    const lights = document.querySelectorAll<Element>('.lightrope li');

    buttons.forEach((el, i) => {
        el.addEventListener('click', () => {
            lights.forEach((el) => {
                el.classList.toggle(`${COLORS[i]}`);
            });
        });
    });
};
