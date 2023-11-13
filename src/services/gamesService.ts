import { Game } from "../types/games/Game.module";
import APIClient from "./apiClient";


export default new APIClient<Game>('/games');