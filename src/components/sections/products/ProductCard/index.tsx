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
import { useCartActions, useFavorites } from "../../../../app/store";
import { IProduct } from "../../../../app/types";
import { RenderCount } from "../../../lib";

interface IProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: IProductCardProps) {
  const { favoritesItems, toggleFavorites } = useFavorites();
  const { addItemToCart } = useCartActions();

  const { description, name, price } = product;

  const isFavorite = favoritesItems.find((item) => item.id === product.id);

  const toggleFavorite = () => {
    toggleFavorites(product);
  };

  const addToCart = () => {
    addItemToCart({ ...product, quantity: 1 });
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
            <IconButton aria-label="add to cart" onClick={addToCart}>
              <AddShoppingCartIcon color="info" />
            </IconButton>
          </RenderCount>
        </CardActions>
      </Card>
    </RenderCount>
  );
}
