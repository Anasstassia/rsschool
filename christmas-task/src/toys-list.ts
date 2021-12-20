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
const SIZES = ['большой', 'средний', 'малый'];

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
        const warning = document.querySelector('.warning');
        if (counterElement) {
            const countFav = DATA.filter((e) => {
                if (e.selected) {
                    return true;
                }
                return false;
            }).length;

            if (countFav < 21) {
                counterElement.innerHTML = String(countFav);
            } else {
                warning?.classList.add('visible');
            }
        }
        document.querySelector('.cross')?.addEventListener('click', () => {
            warning?.classList.remove('visible');
        });
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
            this.data = this.data.filter((e) => currentColors.includes(e.color));
        }

        this.draw();
    }

    filterByCount(count1: number, count2: number) {
        this.data = this.data.filter((e) => +e.count >= count1 && +e.count <= count2);
        this.draw();
    }

    filterByYear(count1: number, count2: number) {
        this.data = this.data.filter((e) => +e.year >= count1 && +e.year <= count2);
        this.draw();
    }

    filterBySize(array: number[]) {
        if (array.length === 0) {
            this.data = DATA;
        } else {
            const currentSizes = array.map((e) => SIZES[e]);
            this.data = this.data.filter((e) => currentSizes.includes(e.size));
        }

        this.draw();
    }

    filterByFav(a: boolean) {
        if (a === true) {
            this.data = this.data.filter((e) => e.favorite === true);
        } else {
            this.data = DATA;
        }

        this.draw();
    }

    resetAll() {
        this.data = DATA;
        this.draw();
    }

    searchAll(value: string) {
        this.data = DATA.filter((el) => el.name.toLowerCase().includes(value.toLowerCase()));
        this.draw();

        if (this.data.length === 0) {
            const message = `Извините, совпадений не обнаружено.`;
            const container = document.querySelector<HTMLElement>('.toys');
            container?.append(message);
        }
    }

    draw() {
        const template = `<div class="template-toy">
                        <h2>Большой шар с рисунком</h2>
                        <div class="heart"></div>
                        <img id="imgId" src="/assets/toys/1.png" class="img-toy" alt="round" />
                        <div class="description">
                            <p>
                                Количество:
                                <span class="count">1</span>
                            </p>
                            <p>
                                Год покупки:
                                <span class="year">1960 год</span>
                            </p>
                            <p>
                                Форма:
                                <span class="shape">шар</span>
                            </p>
                            <p>
                                Цвет:
                                <span class="color">красный</span>
                            </p>
                            <p>
                                Размер:
                                <span class="size">большой</span>
                            </p>
                            <p>
                                Любимая:
                                <span class="favorite">да</span>
                            </p>
                        </div>
                    </div>`;
        const container = document.querySelector<HTMLElement>('.toys');
        if (container && template) {
            container.innerHTML = '';
        }
        this.data.forEach((el, i) => {
            const newCard = document.createElement('div');
            newCard.innerHTML = template;
            if (newCard) {
                const name = newCard.querySelector<HTMLImageElement>('.template-toy h2');
                if (name) {
                    name.textContent = `${el.name}`;
                }
                const image = newCard.querySelector<HTMLImageElement>('.img-toy');
                if (image) {
                    image.src = `/assets/toys/${el.num}.png`;
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
    }
}
