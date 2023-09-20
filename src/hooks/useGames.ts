import { GameQuery } from "../types/games/GameQuery.module";
import { Game } from "../types/games/Game.module";
import useData from "./useData";

const useGames = (
  gameQuery: GameQuery
) => {
  return useData<Game>(
    "games",
    {
      params: {
        genres: gameQuery.genre?.id,
        plaforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder
      },
    },
    [gameQuery]
  );
};

export default useGames;
