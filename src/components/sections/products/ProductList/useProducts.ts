import axios from "axios";
import { useQuery } from "../../../../app/hooks";
import { IProduct } from "../../../../app/types";

const getProducts = async () => {
  const response = await axios.get<IProduct[]>(
    "http://localhost:5000/products"
  );

  return response.data;
};

export function useProducts() {
  return useQuery({
    queryKey: "products",
    queryFn: getProducts,
    staleTime: 5000,
    enabled: true,
  });
}
