import { Grid2 as Grid } from "@mui/material";
import { QueryWrapper } from "../../../lib";
import { ProductCard } from "../ProductCard";
import { useProducts } from "./useProducts";

export function ProductList() {
  const { data, error, refetch, status } = useProducts();

  return (
    <QueryWrapper data={data} error={error} refetch={refetch} status={status}>
      <Grid container rowSpacing={4} columnSpacing={4}>
        {data?.map((product) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={product.id} padding={2}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </QueryWrapper>
  );
}
