export interface FetchResponse<T> {
    next: string | null,
    count: number,
    results: T[]
}