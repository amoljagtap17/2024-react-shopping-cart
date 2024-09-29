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
import { memo } from "react";
import { useCartDispatch } from "../../../../../../app/store";
import { CART_ACTION_TYPES, ICartItem } from "../../../../../../app/types";
import { RenderCount } from "../../../../../lib";

interface ICartItemProps {
  item: ICartItem;
}

function CartItemUnmemoized({ item }: ICartItemProps) {
  const dispatch = useCartDispatch();
  const { id, price, quantity, name } = item;

  // TODO: move below all button code to separate components

  return (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          color="error"
          onClick={() =>
            dispatch({ type: CART_ACTION_TYPES.REMOVE_ITEM, payload: id })
          }
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
          onClick={() =>
            dispatch({ type: CART_ACTION_TYPES.DECREASE_QUANTITY, payload: id })
          }
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
          onClick={() =>
            dispatch({ type: CART_ACTION_TYPES.INCREASE_QUANTITY, payload: id })
          }
          sx={{ display: "block" }}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
}

export const CartItem = memo(CartItemUnmemoized);
