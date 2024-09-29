import { IProduct } from "./products";

export interface ICartItem extends IProduct {
  quantity: number;
}

export const CART_ACTION_TYPES = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
} as const;

export type ICartAction =
  | { type: typeof CART_ACTION_TYPES.ADD_ITEM; payload: ICartItem }
  | { type: typeof CART_ACTION_TYPES.REMOVE_ITEM; payload: number }
  | { type: typeof CART_ACTION_TYPES.INCREASE_QUANTITY; payload: number }
  | { type: typeof CART_ACTION_TYPES.DECREASE_QUANTITY; payload: number };

export interface ICartContextType {
  cartItems: ICartItem[];
  addItemToCart: (item: ICartItem) => void;
  removeItemFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}
