import { Box, Divider, List, Typography } from "@mui/material";
import { RenderCount } from "../../../lib";
import { CartItemsList } from "./CartItemsList";
import { CartTotal } from "./CartTotal";
import { EmptyCart } from "./EmptyCart";

export function CartDrawer() {
  return (
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
  );
}
