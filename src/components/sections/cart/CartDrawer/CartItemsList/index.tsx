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
import { useCartDispatch, useCartItems } from "../../../../../app/store";
import { RenderCount } from "../../../../lib";

export function CartItemsList() {
  const cartItems = useCartItems();
  const dispatch = useCartDispatch();

  return cartItems.map(({ id, name, price, quantity }) => (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          color="error"
          onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
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
          onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: id })}
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
          onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: id })}
          sx={{ display: "block" }}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </ListItem>
  ));
}
