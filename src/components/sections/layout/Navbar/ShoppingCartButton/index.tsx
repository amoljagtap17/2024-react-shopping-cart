import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Box, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { RenderCount } from "../../../../lib";
import { CartDrawer } from "../../../cart";

interface IShoppingCartButtonProps {
  onClick: () => void;
}

function ShoppingCartIconButton({ onClick }: IShoppingCartButtonProps) {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="shopping cart"
      onClick={onClick}
    >
      <ShoppingCartCheckoutIcon />
    </IconButton>
  );
}

export function ShoppingCartButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  return (
    <Box>
      <RenderCount bgcolor="success">
        <ShoppingCartIconButton onClick={handleOpen} />
      </RenderCount>

      {isOpen ? (
        <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
          <CartDrawer />
        </Drawer>
      ) : null}
    </Box>
  );
}
