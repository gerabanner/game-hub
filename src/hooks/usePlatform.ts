import { useQuery } from "@tanstack/react-query";
import { Platform } from "../types/platforms/Platforms.module";
import platformService from "../services/platformService";

const usePlatform = () => useQuery<Platform[], Error>({
    queryKey: ['platforms'],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hr
})

export default usePlatform;