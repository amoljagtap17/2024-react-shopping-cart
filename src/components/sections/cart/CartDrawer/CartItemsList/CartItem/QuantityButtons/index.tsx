import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, IconButton, Typography } from "@mui/material";
import { useCart } from "../../../../../../../app/store";
import { RenderCount } from "../../../../../../lib";

interface IQuantityButtonsProps {
  id: number;
  quantity: number;
}

export function QuantityButtons({ id, quantity }: IQuantityButtonsProps) {
  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    <RenderCount bgcolor="primary">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={140}
      >
        <IconButton
          edge="end"
          onClick={() => decreaseQuantity(id)}
          disabled={quantity <= 1}
          sx={{ display: "block", marginRight: 1 }}
        >
          <RemoveIcon />
        </IconButton>
        <Typography
          variant="body1"
          width={24}
          height={30}
          component="div"
          padding={1}
          boxSizing="content-box"
          textAlign="center"
        >
          {quantity}
        </Typography>
        <IconButton
          edge="end"
          onClick={() => increaseQuantity(id)}
          sx={{ display: "block" }}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </RenderCount>
  );
}
