import { Genre } from "../types/genres/Genre.module";
import useData from "./useData"

const useGenres = () => {
    return useData<Genre>('genres');
}

export default useGenres;