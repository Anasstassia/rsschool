import { getCars, getWinners } from './api';
import { ICar } from './interface';

export const state: { cars?: ICar[]; winners?: { [key: string]: string }[] } = {};

export const initState = async () => {
    const [cars, winners] = await Promise.all([getCars(), getWinners()]);

    Object.assign(state, { cars, winners });
};
