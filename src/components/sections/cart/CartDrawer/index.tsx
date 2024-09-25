import { Box, Divider, Drawer, Typography } from "@mui/material";

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
      </Box>
    </Drawer>
  );
}
