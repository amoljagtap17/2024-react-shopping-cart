import { Grid2 as Grid } from "@mui/material";
import { ProductCard } from "../ProductCard";
import { useProducts } from "./useProducts";

export function ProductList() {
  const { data, error, isLoading } = useProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error !== null) {
    return <p>{error}</p>;
  }

  return (
    <Grid container rowSpacing={4} columnSpacing={4}>
      {data.map((product) => (
        <Grid size={{ xs: 12, md: 6, lg: 4 }} key={product.id} padding={2}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
