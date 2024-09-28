import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { IProduct } from "../../../../app/types";
import { RenderCount } from "../../../lib";
import { AddToCartButton } from "./AddToCartButton";
import { FavoriteButton } from "./FavoriteButton";

interface IProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: IProductCardProps) {
  const { description, name, price } = product;

  return (
    <RenderCount bgcolor="primary">
      <Card variant="outlined" square>
        <CardHeader title={name} subheader={price} />
        <CardContent sx={{ minHeight: 100 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
          <FavoriteButton />
          <AddToCartButton product={product} />
        </CardActions>
      </Card>
    </RenderCount>
  );
}
