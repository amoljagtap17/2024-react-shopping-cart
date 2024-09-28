import { produce } from "immer";
import { createContext, ReactNode, useContext, useReducer } from "react";
import { ICartAction, ICartContextType, ICartItem } from "../types";

const CartContext = createContext<ICartContextType | undefined>(undefined);

const cartReducer = produce((draft: ICartItem[], action: ICartAction) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = draft.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        draft.push({ ...action.payload, quantity: 1 });
      }

      break;
    }
    case "REMOVE_ITEM": {
      const index = draft.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        draft.splice(index, 1);
      }

      break;
    }
    case "INCREASE_QUANTITY": {
      const item = draft.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }

      break;
    }
    case "DECREASE_QUANTITY": {
      const item = draft.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      break;
    }
    default:
      return draft;
  }
}, []);

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
