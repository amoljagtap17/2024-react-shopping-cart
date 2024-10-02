import { useCartState } from "../../../../../app/store";
import { CartItem } from "./CartItem";

export function CartItemsList() {
  const { cartItems } = useCartState();

  return cartItems.map((cartItem) => (
    <CartItem item={cartItem} key={cartItem.id} />
  ));
}
