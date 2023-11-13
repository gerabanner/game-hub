import { GameQuery } from "../types/games/GameQuery.module";
import { Game } from "../types/games/Game.module";
import gamesService from "../services/gamesService";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./../types/genres/FetchResponse.module.d";

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      gamesService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });
};

export default useGames;
