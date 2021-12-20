import ToysList from './toys-list';

export const sorted = (toys: ToysList) => {
    const select = document.querySelector<HTMLSelectElement>('.select');
    if (select) {
        select.addEventListener('change', () => {
            if (select.options.selectedIndex > 0) {
                toys.sort(select.options.selectedIndex - 1);
            }
        });
    }
};

export const selectShape = (toys: ToysList) => {
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

export const selectColor = (toys: ToysList) => {
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

export const selectSize = (toys: ToysList) => {
    const sizeIndex: Array<number> = [];
    const inputs = document.querySelectorAll<HTMLInputElement>('.sizes input');
    inputs.forEach((input, i) => {
        input.addEventListener('change', (e) => {
            if (input.checked && sizeIndex.indexOf(i) === -1) {
                sizeIndex.push(i);
            } else {
                sizeIndex.splice(sizeIndex.indexOf(i), 1);
            }
            toys.filterBySize(sizeIndex);
        });
    });
};

export const selectFavorite = (toys: ToysList) => {
    const input = document.querySelector<HTMLInputElement>('.fav input');
    input?.addEventListener('change', () => {
        if (input.checked) {
            toys.filterByFav(true);
        } else {
            toys.filterByFav(false);
        }
    });
};

export const reset = (toys: ToysList) => {
    const button = document.querySelector('.reset');
    button?.addEventListener('click', () => {
        toys.resetAll();
    });
};

export const search = (toys: ToysList) => {
    const search = document.querySelector<HTMLInputElement>('.search');
    search?.addEventListener('input', () => {
        toys.searchAll(search.value);
    });
};
