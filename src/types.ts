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

export interface IData {
    status: string;
    totalResults: number;
    articles: TItem[];
}
