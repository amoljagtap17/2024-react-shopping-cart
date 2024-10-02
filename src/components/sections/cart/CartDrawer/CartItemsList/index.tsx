import { useCart } from "../../../../../app/store";
import { CartItem } from "./CartItem";

export function CartItemsList() {
  const { cartItems } = useCart();

  return cartItems.map((cartItem) => (
    <CartItem item={cartItem} key={cartItem.id} />
  ));
}
