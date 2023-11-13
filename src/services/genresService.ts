import { Genre } from "../types/genres/Genre.module";
import APIClient from "./apiClient";


export default new APIClient<Genre>('/genres');