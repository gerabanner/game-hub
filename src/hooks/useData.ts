// import { useState, useEffect } from "react";
// import { AxiosRequestConfig, CanceledError } from "axios";
// import apiClient from "../services/apiClient";
// import { FetchResponse } from "../types/genres/FetchResponse.module";

// const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setIsLoading(true);

//     apiClient
//       .get<FetchResponse>(`/${endpoint}`, {
//         signal: controller.signal,
//         ...requestConfig
//       })
//       .then((res) => {
//         setData(res.data.results);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         if (error instanceof CanceledError) return;
//         setError(error.message);
//         setIsLoading(false);
//       });

//     return () => controller.abort();
//   }, deps ? [...deps]: []);

//   return { data, error, isLoading };
// };

// export default useData;
