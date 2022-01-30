import ToysList from './toys-list';

const setItem = (key: string, value: unknown) => localStorage.setItem(key, JSON.stringify(value));

export const sorted = (toys: ToysList) => {
    const select = document.querySelector<HTMLSelectElement>('.select');
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
    const shapeIndexes: Array<number> = [];
    const buttons = document.querySelectorAll('.shapes button');
    buttons.forEach((buttonItem, i) =>
        buttonItem.addEventListener('click', () => {
            buttonItem.classList.toggle('active');
            if (!shapeIndexes.includes(i)) {
                shapeIndexes.push(i);
            } else {
                shapeIndexes.splice(shapeIndexes.indexOf(i), 1);
            }
            toys.filterByShape(shapeIndexes);
            setItem('shape', shapeIndexes);
        })
    );
};

export const selectColor = (toys: ToysList) => {
    const colorIndexes: Array<number> = [];
    const buttons = document.querySelectorAll('.colors button');
    buttons.forEach((buttonItem, i) =>
        buttonItem.addEventListener('click', () => {
            buttonItem.classList.toggle('active');
            if (!colorIndexes.includes(i)) {
                colorIndexes.push(i);
            } else {
                colorIndexes.splice(colorIndexes.indexOf(i), 1);
            }
            toys.filterByColor(colorIndexes);
            setItem('color', colorIndexes);
        })
    );
};

export const selectSize = (toys: ToysList) => {
    const inputs = document.querySelectorAll<HTMLInputElement>('.sizes input');
    const sizeIndexes: Array<number> = [];
    inputs.forEach((input, i) => {
        input.addEventListener('change', () => {
            if (input.checked && !sizeIndexes.includes(i)) {
                sizeIndexes.push(i);
            } else {
                sizeIndexes.splice(sizeIndexes.indexOf(i), 1);
            }
            toys.filterBySize(sizeIndexes);
            setItem('size', sizeIndexes);
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
    const searchInput = document.querySelector<HTMLInputElement>('.search');
    searchInput?.addEventListener('input', () => {
        toys.searchAll(searchInput.value);
    });
};

export const resetLocalStorage = (toys: ToysList) => {
    const buttonLocalStorage = document.querySelector('.reset-ls');
    buttonLocalStorage?.addEventListener('click', () => {
        document.querySelector<HTMLElement>('.reset')?.click();
        toys.resetSettings();
    });
};
