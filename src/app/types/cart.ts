import { IProduct } from "./products";

export interface ICartItem extends IProduct {
  quantity: number;
}

export type ICartAction =
  | { type: "ADD_ITEM"; payload: ICartItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREASE_QUANTITY"; payload: number }
  | { type: "DECREASE_QUANTITY"; payload: number };

export interface ICartContextType {
  cartItems: ICartItem[];
  addItemToCart: (item: ICartItem) => void;
  removeItemFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}
