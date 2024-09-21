import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../../../../app/types";

interface IUseProductsSuccess {
  data: IProduct[];
  isLoading: boolean;
  error: null;
}

interface IUseProductsError {
  data: null;
  isLoading: boolean;
  error: string;
}

export function useProducts(): IUseProductsSuccess | IUseProductsError {
  const [data, setData] = useState<IProduct[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    (async () => {
      setData(null);
      setIsLoading(true);
      setError(null);

      try {
        const res = await axios.get<IProduct[]>(
          "http://localhost:5000/products"
        );

        if (ignore) {
          return;
        }

        if (res.status !== 200) {
          throw new Error(`A network error occurred.`);
        }

        const data = res.data;

        setData(data);
        setIsLoading(false);
      } catch (e) {
        setError((e as unknown as Error).message);
        setIsLoading(false);
      }
    })();

    return () => {
      ignore = true;
    };
  }, []);

  if (error) {
    return { data, isLoading, error } as IUseProductsError;
  }

  return { data, isLoading, error } as IUseProductsSuccess;
}
