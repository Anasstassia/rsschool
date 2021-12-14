import data from './../data';

const calcSelected = () => {
    const counterElement = document.querySelector<HTMLElement>('.fav-select span');
    if (counterElement) {
        counterElement.innerHTML = String(
            data.filter((e) => {
                if (e.selected) {
                    return true;
                }
                return false;
            }).length
        );
    }
};

export function createCards() {
    const template = document.querySelector('.template-toy');
    const container = document.querySelector('.toys');

    data.forEach((el, i) => {
        const newCard = template?.cloneNode(true) as HTMLElement;
        //заполняем контент карточки
        if (newCard) {
            const name = newCard.querySelector<HTMLImageElement>('.template-toy h2');
            if (name) {
                name.textContent = `${data[i].name}`;
            }
            const image = newCard.querySelector<HTMLImageElement>('.img-toy');
            if (image) {
                image.src = `/toys/${i + 1}.png`;
            }
            const count = newCard.querySelector<HTMLImageElement>('.count');
            if (count) {
                count.textContent = `${data[i].count}`;
            }
            const year = newCard.querySelector<HTMLImageElement>('.year');
            if (year) {
                year.textContent = `${data[i].year} г.`;
            }
            const shape = newCard.querySelector<HTMLImageElement>('.shape');
            if (shape) {
                shape.textContent = `${data[i].shape}`;
            }
            const color = newCard.querySelector<HTMLImageElement>('.color');
            if (color) {
                color.textContent = `${data[i].color}`;
            }
            const size = newCard.querySelector<HTMLImageElement>('.size');
            if (size) {
                size.textContent = `${data[i].size}`;
            }
            const favorite = newCard.querySelector<HTMLImageElement>('.favorite');
            if (favorite) {
                favorite.textContent = `${data[i].favorite}`;
            }

            const heart = newCard.querySelector<HTMLElement>('.heart');

            heart?.addEventListener('click', () => {
                heart.classList.toggle('active');
                data[i].selected = !data[i].selected;
                calcSelected();
            });

            container?.appendChild(newCard);
        }
    });
    template?.remove();
}
