const trees = document.querySelectorAll<HTMLElement>('.tree-select');
const tree = document.querySelector<HTMLImageElement>('.main-tree');
const treeBg = document.querySelector<HTMLImageElement>('.tree');
const backgrounds = document.querySelectorAll<HTMLElement>('.background');

export const addTreeListeners = () => {
    trees.forEach((el, i) =>
        el.addEventListener('click', () => {
            if (tree) {
                tree.src = `./assets/tree/${i + 1}.png`;
            }
        })
    );
};

export const setBackgroundListeners = () => {
    backgrounds.forEach((bg, i) =>
        bg.addEventListener('click', () => {
            if (treeBg) {
                treeBg.style.backgroundImage = `url(./../assets/bg/${i + 1}.jpg)`;
            }
        })
    );
};
