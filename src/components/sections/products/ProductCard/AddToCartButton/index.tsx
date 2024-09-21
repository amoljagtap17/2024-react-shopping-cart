import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, IconButton } from "@mui/material";
import { RenderCount } from "../../../../lib";

export function AddToCartButton() {
  const handleAddButtonClick = () => {};

  return (
    <Box position="relative">
      <RenderCount />
      <IconButton aria-label="add to cart" onClick={handleAddButtonClick}>
        <AddShoppingCartIcon color="info" />
      </IconButton>
    </Box>
  );
}
