export interface ICar {
    color: string;
    id?: number;
    name: string;
}

export interface IState {
    cars?: ICar[];
    winners?: { [key: string]: string }[];
    currentCarId?: number;
}
