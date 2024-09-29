import { AxiosError } from "axios";
import { ReactNode } from "react";
import { IQueryStatus } from "../../../app/types";
import { ErrorRetry } from "../ErrorRetry";
import { Spinner } from "../Spinner";

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
  data,
}: QueryWrapperProps<T>) {
  if (status === "loading") return <Spinner />;

  if (status === "error")
    return (
      <ErrorRetry
        error={error as AxiosError}
        onClickHandler={() => refetch()}
      />
    );

  if (status === "success" && data) return <>{children}</>;

  return null;
}
