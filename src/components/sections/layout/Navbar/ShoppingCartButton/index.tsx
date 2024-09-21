import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { RenderCount } from "../../../../lib";
import { CartDrawer } from "../../../cart";

export function ShoppingCartButton() {
  const [showCartDrawer, setShowCartDrawer] = useState(false);

  const toggleCartDrawer = () => {
    setShowCartDrawer((prevShowCartDrawer) => !prevShowCartDrawer);
  };

  return (
    <Box position="relative">
      <RenderCount />
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="shopping cart"
        onClick={toggleCartDrawer}
      >
        <ShoppingCartCheckoutIcon />
      </IconButton>
      {showCartDrawer ? <CartDrawer open onClose={toggleCartDrawer} /> : null}
    </Box>
  );
}
