import { Typography } from "@mui/material";
import { useCartState } from "../../../../../app/store";

export function EmptyCart() {
  const { cartItems } = useCartState();

  return cartItems.length === 0 ? (
    <Typography variant="body1" sx={{ p: 2 }}>
      Your cart is empty!
    </Typography>
  ) : null;
}
