import { Box, Drawer } from "@mui/material";

interface ICartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: ICartDrawerProps) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box width="40vw">some Drawer content</Box>
    </Drawer>
  );
}
