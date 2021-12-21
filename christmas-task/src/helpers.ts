import ToysList from './toys-list';

const setItem = (key: string, value: unknown) => localStorage.setItem(key, JSON.stringify(value));
const getItem = <T>(key: string): T => JSON.parse(localStorage.getItem(key) || '{}');

export const sorted = (toys: ToysList) => {
    const select = document.querySelector<HTMLSelectElement>('.select');
    // const storageSort = getItem<number>('sort');
    if (select) {
        select.addEventListener('change', () => {
            if (select.options.selectedIndex > 0) {
                toys.sort(select.options.selectedIndex - 1);
                setItem('sort', select.options.selectedIndex - 1);
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
            setItem('shape', shapesIndex);
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
            setItem('color', colorsIndex);
        })
    );
};

export const selectSize = (toys: ToysList) => {
    const inputs = document.querySelectorAll<HTMLInputElement>('.sizes input');
    // const storageSize = getItem<number[]>('size');
    // if (storageSize) {
    // inputs.forEach((input, i) => {
    //     if (storageSize.includes(i)) {
    //         input.checked = true;
    //     }
    // });
    // toys.filterBySize(storageSize);
    // }
    const sizeIndex: Array<number> = [];
    inputs.forEach((input, i) => {
        input.addEventListener('change', () => {
            if (input.checked && sizeIndex.indexOf(i) === -1) {
                sizeIndex.push(i);
            } else {
                sizeIndex.splice(sizeIndex.indexOf(i), 1);
            }
            toys.filterBySize(sizeIndex);
            setItem('size', sizeIndex);
        });
    });
};

export const selectFavorite = (toys: ToysList) => {
    const input = document.querySelector<HTMLInputElement>('.fav input');
    input?.addEventListener('change', () => {
        toys.filterByFav(input.checked);
        setItem('favorite', input.checked);
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

export const resetLocalStorage = (toys: ToysList) => {
    const buttonLocalStorage = document.querySelector('.reset-ls');
    buttonLocalStorage?.addEventListener('click', () => {
        document.querySelector<HTMLElement>('.reset')?.click();
        toys.resetSettings();
    });
};
// reset();
// setItem('size', []);
// setItem('color', []);
// setItem('shape', []);
