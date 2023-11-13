export interface FetchResponse<T> {
    data: any;
    count: number,
    results: T[]
}