import { useQuery } from "@tanstack/react-query";
import { Genre } from "../types/genres/Genre.module";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24 hr
  // initialData: { count: genres.length, results: genres}
});

export default useGenres;
