export type TItem = {
    urlToImage: string;
    author: string;
    publishedAt: string;
    title: string;
    description: string;
    url: string;
    source: {
        name: string;
    };
};

export interface INews {
    status: string;
    totalResults: number;
    articles: TItem[];
}

export interface ISources {
    sources?: { name: string; id: string }[];
}
