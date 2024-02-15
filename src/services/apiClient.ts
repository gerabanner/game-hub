import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../types/genres/FetchResponse.module";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd283dafcafbb4864ae7b4b96f3278a5b'
    }
});


class APIClient<T> {

    _endPoint: string;

    constructor(endPont: string) {
        this._endPoint = endPont
    }

    getAll = (config: AxiosRequestConfig) => {
        // return axiosInstance.get<FetchResponse<Genre>[]>(this._endPoint, params && {params: params}).then((response: FetchResponse<Genre>) => response.data);
        return axiosInstance.get<FetchResponse<T>>(this._endPoint, config).then((response) => response.data);
    }

    getById = (id: string | number) => {
        return axiosInstance.get<T>(this._endPoint).then(response => response.data);
    }

    post = () => {
        return axiosInstance.post<T>(this._endPoint).then(response => response.data);
    }
}

export default APIClient;

