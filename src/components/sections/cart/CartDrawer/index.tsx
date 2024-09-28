import { Box, Divider, Drawer, List, Typography } from "@mui/material";
import { RenderCount } from "../../../lib";
import { CartItemsList } from "./CartItemsList";
import { CartTotal } from "./CartTotal";
import { EmptyCart } from "./EmptyCart";

interface ICartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: ICartDrawerProps) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box width="40vw">
        <Typography variant="h6" component="div" sx={{ p: 2 }}>
          Cart Items
        </Typography>
        <Divider />
        <RenderCount bgcolor="error">
          <Box padding={2} />
        </RenderCount>
        <List>
          <EmptyCart />
          <CartItemsList />
        </List>
        <CartTotal />
      </Box>
    </Drawer>
  );
}
