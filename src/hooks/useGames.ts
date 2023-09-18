import { Game } from "../types/games/Game.module";
import { Genre } from "../types/genres/Genre.module";
import { Platform } from "../types/platforms/Platforms.module";
import useData from "./useData";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  return useData<Game>(
    "games",
    {
      params: {
        genres: selectedGenre?.id,
        plaforms: selectedPlatform?.id
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );
};

export default useGames;
