import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useCart } from "../../../../../../app/store";
import { ICartItem } from "../../../../../../app/types";
import { RenderCount } from "../../../../../lib";

interface ICartItemProps {
  item: ICartItem;
}

export function CartItem({ item }: ICartItemProps) {
  const { removeItemFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const { id, price, quantity, name } = item;

  return (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          color="error"
          onClick={() => removeItemFromCart(id)}
        >
          <DeleteIcon />
        </IconButton>
      }
      divider
    >
      <ListItemText
        primary={name}
        secondary={
          <RenderCount bgcolor="info">${Number(price).toFixed(2)}</RenderCount>
        }
      />
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
    </ListItem>
  );
}
