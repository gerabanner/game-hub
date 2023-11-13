import { useQuery } from "@tanstack/react-query";
import genresService from "../services/genresService";
import Genres from "../data/Genres";

const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: genresService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hr
    initialData: { count: Genres.length, results: Genres}
  })
};

export default useGenres;
