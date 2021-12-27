export const lightOn = () => {
    const COLORS = ['multi', 'red', 'blue', 'yellow', 'green'];
    const buttons = document.querySelectorAll('.garland');
    const lights = document.querySelectorAll<Element>('.lightrope li');

    buttons.forEach((el, i) => {
        el.addEventListener('click', () => {
            lights.forEach((el) => {
                const currentColor = COLORS.find((color) => el.classList.contains(color));
                if (currentColor) {
                    el.classList.remove(currentColor);
                }
                if (currentColor !== COLORS[i]) {
                    el.classList.add(COLORS[i]);
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            });
        });
    });
};
