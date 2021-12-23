const trees = document.querySelectorAll<HTMLElement>('.tree-select');
const tree = document.querySelector<HTMLImageElement>('.main-tree');
const treeBg = document.querySelector<HTMLImageElement>('.tree');
const backgrounds = document.querySelectorAll<HTMLElement>('.background');

export const setTree = () => {
    trees.forEach((el, i) =>
        el.addEventListener('click', () => {
            if (tree) {
                tree.src = `./assets/tree/${i + 1}.png`;
            }
        })
    );
};

export const setBackground = () => {
    backgrounds.forEach((el, i) =>
        el.addEventListener('click', () => {
            if (treeBg) {
                console.log(i + 1);

                treeBg.style.backgroundImage = `url(./../assets/bg/${i + 1}.jpg)`;
            }
        })
    );
};
