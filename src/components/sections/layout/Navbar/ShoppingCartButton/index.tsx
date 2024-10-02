import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Box, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { RenderCount } from "../../../../lib";
import { CartDrawer } from "../../../cart";

export function ShoppingCartButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  return (
    <Box>
      <RenderCount bgcolor="success">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="shopping cart"
          onClick={handleOpen}
        >
          <ShoppingCartCheckoutIcon />
        </IconButton>
      </RenderCount>

      {isOpen ? (
        <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
          <CartDrawer />
        </Drawer>
      ) : null}
    </Box>
  );
}
