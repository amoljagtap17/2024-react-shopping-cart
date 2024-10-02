import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { useCart } from "../../../../../../app/store";
import { ICartItem } from "../../../../../../app/types";
import { RenderCount } from "../../../../../lib";
import { QuantityButtons } from "./QuantityButtons";

interface ICartItemProps {
  item: ICartItem;
}

export function CartItem({ item }: ICartItemProps) {
  const { removeItemFromCart } = useCart();
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
          <RenderCount bgcolor="info" component="span">
            ${Number(price).toFixed(2)}
          </RenderCount>
        }
      />
      <QuantityButtons id={id} quantity={quantity} />
    </ListItem>
  );
}
