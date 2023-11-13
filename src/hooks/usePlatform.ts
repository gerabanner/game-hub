import { useQuery } from "@tanstack/react-query";
import { Platform } from "../types/platforms/Platforms.module";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hr
})

export default usePlatform;