import { Grid2 as Grid } from "@mui/material";
import { IProduct } from "../../../../app/types";
import { ProductCard } from "../ProductCard";

interface IProductListProps {
  products: IProduct[];
}

export function ProductList({ products }: IProductListProps) {
  return (
    <Grid container>
      {products.map((product) => (
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
}
