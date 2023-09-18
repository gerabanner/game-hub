import { Platform } from "../types/platforms/Platforms.module";
import useData from "./useData"

const usePlatform = () => useData<Platform>('platforms/lists/parents');

export default usePlatform;