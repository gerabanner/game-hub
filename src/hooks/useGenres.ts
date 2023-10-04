import Genres from "../data/Genres";

const useGenres = () => {
  return { data: Genres, isLoading: false, error: null };
};

export default useGenres;
