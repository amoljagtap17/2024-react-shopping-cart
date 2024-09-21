import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { RenderCount } from "../../../../lib";

export function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <Box position="relative">
      <RenderCount />
      <IconButton aria-label="add to favorites" onClick={toggleFavorite}>
        <FavoriteIcon color={isFavorite ? "primary" : "secondary"} />
      </IconButton>
    </Box>
  );
}
