import { QueryWrapper } from "../../../lib";
import { ProductListing } from "./ProductListing";
import { useProducts } from "./useProducts";

export function ProductList() {
  const { data, error, refetch, status } = useProducts();

  return (
    <QueryWrapper data={data} error={error} refetch={refetch} status={status}>
      {data ? <ProductListing products={data} /> : null}
    </QueryWrapper>
  );
}
