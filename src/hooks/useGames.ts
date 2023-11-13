import { GameQuery } from "../types/games/GameQuery.module";
import { Game } from "../types/games/Game.module";
import gamesService from "../services/gamesService";
import { useQuery } from "@tanstack/react-query";

const useGames = (
  gameQuery: GameQuery
) => {
  const params = {
          genres: gameQuery.genre?.id,
          plaforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        };

        return useQuery<Game[], Error>({
          queryKey: ['games', gameQuery],
          queryFn: () => gamesService.getAll(params)
        })

};

export default useGames;
