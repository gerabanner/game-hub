import { Game } from "../types/games/Game.module";
import { Genre } from "../types/genres/Genre.module";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null) => {
  return useData<Game>("games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
};

export default useGames;
