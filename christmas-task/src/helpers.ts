import ToysList from './toys-list';
const toys = new ToysList();

export const sorted = () => {
    const select = document.querySelector<HTMLSelectElement>('.select');
    if (select) {
        select.addEventListener('change', () => {
            if (select.options.selectedIndex > 0) {
                toys.sort(select.options.selectedIndex - 1);
            }
        });
    }
};

export const selectShape = () => {
    const shapesIndex: Array<number> = [];
    const buttons = document.querySelectorAll('.shapes button');
    buttons.forEach((buttonItem, i) =>
        buttonItem.addEventListener('click', () => {
            buttonItem.classList.toggle('active');
            if (shapesIndex.indexOf(i) === -1) {
                shapesIndex.push(i);
            } else {
                shapesIndex.splice(shapesIndex.indexOf(i), 1);
            }
            toys.filterByShape(shapesIndex);
        })
    );
};

export const selectColor = () => {
    const colorsIndex: Array<number> = [];
    const buttons = document.querySelectorAll('.colors button');
    buttons.forEach((buttonItem, i) =>
        buttonItem.addEventListener('click', () => {
            buttonItem.classList.toggle('active');
            if (colorsIndex.indexOf(i) === -1) {
                colorsIndex.push(i);
            } else {
                colorsIndex.splice(colorsIndex.indexOf(i), 1);
            }
            toys.filterByColor(colorsIndex);
        })
    );
};
