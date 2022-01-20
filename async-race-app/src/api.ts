const domain = 'http://127.0.0.1:3000';
const GARAGE_URL = '/garage';
// const ENGINE_URL = '/engine';
const WINNERS_URL = '/winners';

class ApiClient {
    apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    makeRequest(url: string, method: string, body?: Record<string, unknown>) {
        return new Request(`${this.apiUrl}${url}`, {
            method,
            mode: 'cors',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async fetch(request: Request) {
        const result = await fetch(request);
        const data = await result.json();
        return data;
    }

    async get(url: string) {
        const request = this.makeRequest(url, 'GET');
        return this.fetch(request);
    }

    async post(url: string, body: Record<string, unknown>) {
        const request = this.makeRequest(url, 'POST', body);
        return this.fetch(request);
    }

    async delete(url: string, body?: Record<string, unknown>) {
        const request = this.makeRequest(url, 'DELETE', body);
        return this.fetch(request);
    }

    async put(url: string, body?: Record<string, unknown>) {
        const request = this.makeRequest(url, 'PUT', body);
        return this.fetch(request);
    }

    async patch(url: string) {
        const request = this.makeRequest(url, 'PATCH');
        return this.fetch(request);
    }
}

const client = new ApiClient(domain);

export const getCars = () => client.get(GARAGE_URL);
export const getWinners = () => client.get(WINNERS_URL);

export const carsNumber = async () => {
    const cars = await getCars();
    return cars.length;
};

export const createCar = (name: string, color: string) =>
    client.post(GARAGE_URL, {
        name,
        color,
    });

export const deleteCar = (id: number) => client.delete(`${GARAGE_URL}/${id}`);
