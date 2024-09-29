import { AxiosError } from "axios";
import { ReactNode } from "react";
import { IQueryStatus } from "../../../app/types";

interface QueryWrapperProps<T> {
  status: IQueryStatus;
  error: AxiosError | null;
  data: T | null;
  refetch: () => void;
  children: ReactNode;
}

export function QueryWrapper<T>({
  status,
  error,
  refetch,
  children,
}: QueryWrapperProps<T>) {
  if (status === "loading") return <div>Loading...</div>;

  if (status === "error")
    return (
      <div>
        Error: {error?.message} <button onClick={refetch}>Retry</button>
      </div>
    );

  if (status === "success") return <>{children}</>;

  return null;
}
