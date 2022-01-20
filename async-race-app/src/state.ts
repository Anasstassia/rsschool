import { getCars, getWinners } from './car-api';
import { IState } from './interface';

export const state: IState = {};

export const initState = async () => {
    const [cars, winners] = await Promise.all([getCars(), getWinners()]);

    Object.assign(state, { cars, winners });
};
