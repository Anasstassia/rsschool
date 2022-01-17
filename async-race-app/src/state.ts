import { getCars, getWinners } from './api';

export const state: { cars?: { [key: string]: string }[]; winners?: { [key: string]: string }[] } = {};

export const initState = async () => {
    const [cars, winners] = await Promise.all([getCars(), getWinners()]);

    Object.assign(state, { cars, winners });
};
