import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";
import { Game } from "../../types/games/Game.module";
import { FetchGamesResponse } from "../../types/games/FetchGameResponse.module";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>(`/games`, { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setError(error.message)
    });

      return () => controller.abort();
  }, []);

  return { games, error };
};

export { useGames };
