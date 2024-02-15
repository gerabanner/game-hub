import { GameQuery } from "../types/games/GameQuery.module";
import { Game } from "../types/games/Game.module";
import gamesService from "../services/gamesService";
import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchResponse } from "./../types/genres/FetchResponse.module.d";

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gamesService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
