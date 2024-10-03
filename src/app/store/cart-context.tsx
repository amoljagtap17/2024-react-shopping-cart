import { createContext, ReactNode, useContext, useReducer } from "react";
import { CART_ACTION_TYPES, ICartContextType, ICartItem } from "../types";
import { cartReducer } from "./reducers";

const CartContext = createContext<ICartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addItemToCart = (item: ICartItem) => {
    dispatch({ type: CART_ACTION_TYPES.ADD_ITEM, payload: item });
  };

  const removeItemFromCart = (id: number) => {
    dispatch({ type: CART_ACTION_TYPES.REMOVE_ITEM, payload: id });
  };

  const increaseQuantity = (id: number) => {
    dispatch({ type: CART_ACTION_TYPES.INCREASE_QUANTITY, payload: id });
  };

  const decreaseQuantity = (id: number) => {
    dispatch({ type: CART_ACTION_TYPES.DECREASE_QUANTITY, payload: id });
  };

  const values: ICartContextType = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
