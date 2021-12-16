import { IToy, data as DATA } from '../data';

type ICallback = (a: IToy, b: IToy) => number;

const SORTS: ICallback[] = [
    (a, b) => a.name.localeCompare(b.name),
    (a, b) => b.name.localeCompare(a.name),
    (a, b) => Number(a.year) - Number(b.year),
    (a, b) => Number(b.year) - Number(a.year),
];

const SHAPES = ['колокольчик', 'шар', 'шишка', 'снежинка', 'фигурка'];
const COLORS = ['белый', 'желтый', 'красный', 'синий', 'зелёный'];

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
        this.year = [1940, 2020];
        this.size = null;
        this.onlyFavorites = false;
        this.data = DATA;

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
                DATA.filter((e) => {
                    if (e.selected) {
                        return true;
                    }
                    return false;
                }).length
            );
        }
    }

    filterByShape(array: number[]) {
        if (array.length === 0) {
            this.data = DATA;
        } else {
            const currentShapes = array.map((e) => SHAPES[e]);
            this.data = DATA.filter((e) => currentShapes.includes(e.shape));
        }
        this.draw();
    }

    filterByColor(array: number[]) {
        if (array.length === 0) {
            this.data = DATA;
        } else {
            const currentColors = array.map((e) => COLORS[e]);
            this.data = DATA.filter((e) => currentColors.includes(e.color));
        }
        this.draw();
    }

    draw() {
        const template = document.querySelector('.template-toy');
        const container = document.querySelector<HTMLElement>('.toys');
        if (container && template) {
            container.innerHTML = '';
        }
        this.data.forEach((el, i) => {
            const newCard = template?.cloneNode(true) as HTMLElement;
            if (newCard) {
                const name = newCard.querySelector<HTMLImageElement>('.template-toy h2');
                if (name) {
                    name.textContent = `${el.name}`;
                }
                const image = newCard.querySelector<HTMLImageElement>('.img-toy');
                if (image) {
                    image.src = `/toys/${el.num}.png`;
                }
                const count = newCard.querySelector<HTMLImageElement>('.count');
                if (count) {
                    count.textContent = `${el.count}`;
                }
                const year = newCard.querySelector<HTMLImageElement>('.year');
                if (year) {
                    year.textContent = `${el.year} г.`;
                }
                const shape = newCard.querySelector<HTMLImageElement>('.shape');
                if (shape) {
                    shape.textContent = `${el.shape}`;
                }
                const color = newCard.querySelector<HTMLImageElement>('.color');
                if (color) {
                    color.textContent = `${el.color}`;
                }
                const size = newCard.querySelector<HTMLImageElement>('.size');
                if (size) {
                    size.textContent = `${el.size}`;
                }
                const favorite = newCard.querySelector<HTMLImageElement>('.favorite');
                if (favorite) {
                    favorite.textContent = `${el.favorite}`;
                }

                const heart = newCard.querySelector<HTMLElement>('.heart');
                if (el.selected) {
                    heart?.classList.add('active');
                } else {
                    heart?.classList.remove('active');
                }
                heart?.addEventListener('click', () => {
                    heart.classList.toggle('active');
                    el.selected = !el.selected;
                    this.calcSelected();
                });

                container?.appendChild(newCard);
            }
        });
        template?.remove();
    }
}
