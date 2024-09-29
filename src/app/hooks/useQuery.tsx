import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import {
  ICacheEntry,
  IQueryStatus,
  IUseQueryOptions,
  IUseQueryResult,
  IUseQuerySuccessResult,
} from "../types";

const queryCache = new Map<string, ICacheEntry<any>>();

export function useQuery<T>(
  options: IUseQueryOptions<T>
): IUseQueryResult<T> | IUseQuerySuccessResult<T> {
  const { queryKey, queryFn, staleTime = 300000, enabled = true } = options;
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [status, setStatus] = useState<IQueryStatus>("idle");

  const fetchData = useCallback(async () => {
    setStatus("loading");
    setError(null);

    try {
      const result = await queryFn();
      queryCache.set(queryKey, { data: result, timestamp: Date.now() });
      setData(result);
      setStatus("success");
    } catch (err) {
      setError(err as AxiosError);
      setStatus("error");
    }
  }, [queryKey, queryFn]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!enabled) return;

    const cacheEntry = queryCache.get(queryKey);
    if (cacheEntry && Date.now() - cacheEntry.timestamp < staleTime) {
      setData(cacheEntry.data);
      setStatus("success");
    } else {
      fetchData();
    }
  }, [queryKey, fetchData, staleTime, enabled]);

  if (status === "success" && data !== null) {
    return { data, error, status, refetch } as IUseQuerySuccessResult<T>;
  }

  return { data, error, status, refetch };
}
