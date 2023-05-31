export interface quotes {
    limit: number;
    quotes: [];
    skip: number;
    total: number;
}

export interface quote {
    author?: string;
    id?: number;
    quote: string;
}