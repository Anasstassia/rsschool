class Loader {
    constructor(private baseLink: string, private options: { apiKey: string }) {}

    getResp(
        { endpoint, options }: { endpoint: string; options?: { apiKey?: string; sources?: string } },
        callback: (data: { sources?: { name: string; id: string }[] }) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(options: { apiKey?: string; sources?: string }, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: 'apiKey') => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(
        method: string,
        endpoint: string,
        callback: (...args: unknown[]) => void,
        options: { apiKey?: string; sources?: string }
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
