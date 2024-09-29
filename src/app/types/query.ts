import { AxiosError } from "axios";

export type IQueryStatus = "idle" | "loading" | "success" | "error";

export interface IUseQueryOptions<T> {
  queryKey: string;
  queryFn: () => Promise<T>;
  staleTime?: number;
  enabled?: boolean;
}

export interface IUseQueryResult<T> {
  data: T | null;
  error: AxiosError | null;
  status: QueryStatus;
  refetch: () => void;
}

export type IUseQuerySuccessResult<T> = Omit<IUseQueryResult<T>, "data"> & {
  data: T;
};

export interface ICacheEntry<T> {
  data: T;
  timestamp: number;
}
