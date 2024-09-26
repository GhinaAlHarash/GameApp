import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

interface TRes<T> {
    count: number;
    results: T[];
  }

const useData = <T>(endPoint: string) => {
  const fetchData = () =>
    apiClient.get<TRes<T>>(endPoint).then((res) => res.data.results);

  const {
    data,
    error,
    isLoading,
  } = useQuery<T[], Error>({
    queryKey: [endPoint],
    queryFn: fetchData,
    staleTime: 10 * 1000,
  });

  return { data, error, isLoading };
};

export default useData;
