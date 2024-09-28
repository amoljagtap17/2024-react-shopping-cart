import { Box, Typography } from "@mui/material";
import { useCartItems } from "../../../../../app/store";

export function CartTotal() {
  const cartItems = useCartItems();

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
      <Typography variant="h6">Total:</Typography>
      <Typography variant="h6">${getTotalPrice().toFixed(2)}</Typography>
    </Box>
  );
}
