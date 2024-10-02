import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useFavorites } from "../../../../../app/store";
import { IProduct } from "../../../../../app/types";
import { RenderCount } from "../../../../lib";

interface IFavoriteButtonProps {
  product: IProduct;
}

export function FavoriteButton({ product }: IFavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toggleFavorites } = useFavorites();

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    toggleFavorites(product);
  };

  return (
    <RenderCount bgcolor="secondary">
      <IconButton aria-label="add to favorites" onClick={toggleFavorite}>
        <FavoriteIcon color={isFavorite ? "primary" : "secondary"} />
      </IconButton>
    </RenderCount>
  );
}
