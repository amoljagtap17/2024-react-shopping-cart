import { AxiosError } from "axios";

export type IQueryStatus = "idle" | "loading" | "success" | "error";

export interface IUseQueryOptions<T> {
  queryKey: string;
  queryFn: () => Promise<T>;
  staleTime?: number;
  enabled?: boolean;
}

export interface IUseQueryErrorResult {
  data: null;
  error: AxiosError;
  status: IQueryStatus;
  refetch: () => void;
}

export interface IUseQuerySuccessResult<T> {
  data: T;
  error: null;
  status: IQueryStatus;
  refetch: () => void;
}

export interface ICacheEntry<T> {
  data: T;
  timestamp: number;
}
