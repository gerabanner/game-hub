import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "../../types/genres/Genre.module";
import { FetchGenresResponse } from "../../types/genres/FetchGenresResponse.module";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<FetchGenresResponse>(`/genres`, { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export { useGenres };
