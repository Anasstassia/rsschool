import { IToy, data } from '../data';

type ICallback = (a: IToy, b: IToy) => number;

const SORTS: ICallback[] = [
    (a, b) => a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase()),
    (a, b) => b.name.toLocaleLowerCase().localeCompare(a.name.toLocaleLowerCase()),
    (a, b) => Number(a.year) - Number(b.year),
    (a, b) => Number(b.year) - Number(a.year),
];

export default class ToysList {
    order?: number | null;
    shape?: number[] | null;
    color?: number[] | null;
    count?: [number, number];
    year?: [number, number];
    size?: number[] | null;
    onlyFavorites?: boolean;
    data: IToy[];

    constructor() {
        this.order = 0;
        this.shape = null;
        this.color = null;
        this.count = [1, 20];
        this.year = [1940, 2021];
        this.size = null;
        this.onlyFavorites = false;
        this.data = data;

        this.draw();
    }

    sort(order: number) {
        this.order = order;
        this.data.sort(SORTS[this.order]);
        this.draw();
    }

    calcSelected() {
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
    }

    draw() {
        const template = document.querySelector('.template-toy');
        const container = document.querySelector('.toys');

        this.data.forEach((el, i) => {
            const newCard = template?.cloneNode(true) as HTMLElement;
            if (newCard) {
                const name = newCard.querySelector<HTMLImageElement>('.template-toy h2');
                if (name) {
                    name.textContent = `${this.data[i].name}`;
                }
                const image = newCard.querySelector<HTMLImageElement>('.img-toy');
                if (image) {
                    image.src = `/toys/${i + 1}.png`;
                }
                const count = newCard.querySelector<HTMLImageElement>('.count');
                if (count) {
                    count.textContent = `${this.data[i].count}`;
                }
                const year = newCard.querySelector<HTMLImageElement>('.year');
                if (year) {
                    year.textContent = `${this.data[i].year} г.`;
                }
                const shape = newCard.querySelector<HTMLImageElement>('.shape');
                if (shape) {
                    shape.textContent = `${this.data[i].shape}`;
                }
                const color = newCard.querySelector<HTMLImageElement>('.color');
                if (color) {
                    color.textContent = `${this.data[i].color}`;
                }
                const size = newCard.querySelector<HTMLImageElement>('.size');
                if (size) {
                    size.textContent = `${this.data[i].size}`;
                }
                const favorite = newCard.querySelector<HTMLImageElement>('.favorite');
                if (favorite) {
                    favorite.textContent = `${this.data[i].favorite}`;
                }

                const heart = newCard.querySelector<HTMLElement>('.heart');

                heart?.addEventListener('click', () => {
                    heart.classList.toggle('active');
                    data[i].selected = !data[i].selected;
                    this.calcSelected();
                });

                container?.appendChild(newCard);
            }
        });
        template?.remove();
    }
}
