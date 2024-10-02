import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useCartDispatch, useFavoritesDispatch } from "../../../../app/store";
import {
  CART_ACTION_TYPES,
  FAVORITES_ACTION_TYPES,
  IProduct,
} from "../../../../app/types";
import { RenderCount } from "../../../lib";

interface IProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: IProductCardProps) {
  const { description, name, price } = product;
  const [isFavorite, setIsFavorite] = useState(false);
  const favoritesDispatch = useFavoritesDispatch();
  const cartDispatch = useCartDispatch();

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    favoritesDispatch({
      type: FAVORITES_ACTION_TYPES.TOGGLE_FAVORITES,
      payload: product,
    });
  };

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
          <RenderCount bgcolor="secondary">
            <IconButton aria-label="add to favorites" onClick={toggleFavorite}>
              <FavoriteIcon color={isFavorite ? "primary" : "secondary"} />
            </IconButton>
          </RenderCount>
          <RenderCount bgcolor="warning">
            <IconButton
              aria-label="add to cart"
              onClick={() =>
                cartDispatch({
                  type: CART_ACTION_TYPES.ADD_ITEM,
                  payload: { ...product, quantity: 1 },
                })
              }
            >
              <AddShoppingCartIcon color="info" />
            </IconButton>
          </RenderCount>
        </CardActions>
      </Card>
    </RenderCount>
  );
}
