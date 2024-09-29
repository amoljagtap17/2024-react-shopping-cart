import { Grid2 as Grid } from "@mui/material";
import { IProduct } from "../../../../../app/types";
import { ProductCard } from "../../ProductCard";

interface IProductListingProps {
  products: IProduct[];
}

export function ProductListing({ products }: IProductListingProps) {
  return (
    <Grid container rowSpacing={4} columnSpacing={4}>
      {products.map((product) => (
        <Grid size={{ xs: 12, md: 6, lg: 4 }} key={product.id} padding={2}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
