import { Platform } from "../types/platforms/Platforms.module";
import APIClient from "./apiClient";
import { FetchResponse } from './../types/genres/FetchResponse.module.d';


export default new APIClient<FetchResponse<Platform>>('/platforms/lists/parents');