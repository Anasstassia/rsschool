import { state } from './state';
import client from './utils/api-client';

const GARAGE_URL = '/garage';
const ENGINE_URL = '/engine';
const WINNERS_URL = '/winners';

export const getCars = () => client.get(GARAGE_URL);
export const getWinners = () => client.get(WINNERS_URL);

export const carsNumber = async () => {
    const cars = await getCars();
    return cars.length;
};

export const createCar = async ({ name, color }: { name: string; color: string }) => {
    const car = await client.post(GARAGE_URL, {
        name,
        color,
    });
    state.cars?.push(car);
};

export const deleteCar = (id: number) => {
    state.cars = state.cars?.filter((car) => car.id !== id);
    return client.delete(`${GARAGE_URL}/${id}`);
};

export const updateCar = async ({ id, name, color }: { id: number; name: string; color: string }) => {
    const car = await client.put(`${GARAGE_URL}/${id}`, {
        name,
        color,
    });

    state.cars = state.cars?.map((currentCar) => (car.id === currentCar.id ? car : currentCar));
};

export const startEngine = async (id: number) => {
    const answer = await client.patch(`${ENGINE_URL}?id=${id}&status=started`);
    return answer;
};

export const stopEngine = async (id: number) => {
    const answer = await client.patch(`${ENGINE_URL}?id=${id}&status=stopped`);
    return answer;
};

export const drive = async (id: number) => {
    try {
        const result = await client.patch(`${ENGINE_URL}?id=${id}&status=drive`);
        return result;
    } catch (e) {
        console.log(e);
        throw new Error();
    }
};
