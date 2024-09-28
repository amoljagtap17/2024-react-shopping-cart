import { createContext, ReactNode, useContext, useReducer } from "react";
import { ICartAction, ICartContextType, ICartItem } from "../types";

const CartContext = createContext<ICartContextType | undefined>(undefined);

const cartReducer = (state: ICartItem[], action: ICartAction): ICartItem[] => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "DECREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addItemToCart = (item: ICartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCart = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increaseQuantity = (id: number) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id: number) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  console.log("cartItems::", cartItems);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
