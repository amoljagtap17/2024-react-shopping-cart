import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Box, IconButton } from "@mui/material";
import {
  DrawerContents,
  DrawerContextProvider,
  DrawerTrigger,
  RenderCount,
} from "../../../../lib";
import { CartDrawer } from "../../../cart";

export function ShoppingCartButton() {
  return (
    <Box>
      <DrawerContextProvider>
        <RenderCount bgcolor="success">
          <DrawerTrigger>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="shopping cart"
            >
              <ShoppingCartCheckoutIcon />
            </IconButton>
          </DrawerTrigger>
        </RenderCount>
        <DrawerContents>
          <CartDrawer />
        </DrawerContents>
      </DrawerContextProvider>
    </Box>
  );
}
