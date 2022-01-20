class ApiClient {
    apiUrl = 'http://127.0.0.1:3000';

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

const client = new ApiClient();
export default client;
