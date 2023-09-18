import { Game } from "../types/games/Game.module";
import useData from "./useData"

const useGames = () => {
    return useData<Game>('games');
}

export default useGames;