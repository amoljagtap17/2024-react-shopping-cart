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
import { useCart } from "../../../../../app/store";

export function CartItemsList() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItemFromCart } =
    useCart();

  return cartItems.map(({ id, name, price, quantity }) => (
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
      <ListItemText primary={name} secondary={`${Number(price).toFixed(2)}`} />
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
  ));
}
