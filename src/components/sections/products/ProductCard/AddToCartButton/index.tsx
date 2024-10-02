import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import { useCartActions } from "../../../../../app/store";
import { IProduct } from "../../../../../app/types";
import { RenderCount } from "../../../../lib";

interface IAddToCartButtonProps {
  product: IProduct;
}

export function AddToCartButton({ product }: IAddToCartButtonProps) {
  const { addItemToCart } = useCartActions();

  return (
    <RenderCount bgcolor="warning">
      <IconButton
        aria-label="add to cart"
        onClick={() => addItemToCart({ ...product, quantity: 1 })}
      >
        <AddShoppingCartIcon color="info" />
      </IconButton>
    </RenderCount>
  );
}
