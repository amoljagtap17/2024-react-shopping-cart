import { useCartItems } from "../../../../../app/store";
import { CartItem } from "./CartItem";

export function CartItemsList() {
  const cartItems = useCartItems();

  return cartItems.map((cartItem) => (
    <CartItem item={cartItem} key={cartItem.id} />
  ));
}
