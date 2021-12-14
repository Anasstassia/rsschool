import { IToy, data } from '../data';

type ICallback = (a: IToy, b: IToy) => number;

const SORTS: ICallback[] = [
    (a, b) => a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase()),
    (a, b) => b.name.toLocaleLowerCase().localeCompare(a.name.toLocaleLowerCase()),
    (a, b) => Number(a.year) - Number(b.year),
    (a, b) => Number(b.year) - Number(a.year),
];

export default class ToysList {
    order?: number;
    shape?: Set<number> | null;
    color?: Set<number> | null;
    count?: [number, number];
    year?: [number, number];
    size?: Set<number> | null;
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
    }

    sort(order: number) {
        this.order = order;
        this.data.sort(SORTS[this.order]);
        this.draw();
    }

    draw() {}
}
