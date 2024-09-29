import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useFavoritesDispatch } from "../../../../../app/store";
import { FAVORITES_ACTION_TYPES, IProduct } from "../../../../../app/types";
import { RenderCount } from "../../../../lib";

interface IFavoriteButtonProps {
  product: IProduct;
}

export function FavoriteButton({ product }: IFavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useFavoritesDispatch();

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    dispatch({
      type: FAVORITES_ACTION_TYPES.TOGGLE_FAVORITES,
      payload: product,
    });
  };

  return (
    <RenderCount bgcolor="secondary">
      <IconButton aria-label="add to favorites" onClick={toggleFavorite}>
        <FavoriteIcon color={isFavorite ? "primary" : "secondary"} />
      </IconButton>
    </RenderCount>
  );
}
