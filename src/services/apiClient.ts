import axios from "axios";
import { FetchResponse } from "../types/genres/FetchResponse.module";
import { Genre } from "../types/genres/Genre.module";

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

    getAll = (params: any) => {
        // return axiosInstance.get<FetchResponse<Genre>[]>(this._endPoint, params && {params: params}).then((response: FetchResponse<Genre>) => response.data);
        return axiosInstance.get<T[]>(this._endPoint, params && {params: params}).then((response: any) => response.data.results);
    }

    getById = (id: string | number) =>{
        return axiosInstance.get<T[]>(this._endPoint).then(response => response.data);
    }

    post = () => {
        return axiosInstance.post<T>(this._endPoint).then(response => response.data);
    }
}

export default APIClient;

