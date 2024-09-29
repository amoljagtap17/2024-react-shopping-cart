import { produce } from "immer";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { CART_ACTION_TYPES, ICartAction, ICartItem } from "../types";

const CartStateContext = createContext<ICartItem[]>([]);
const CartDispatchContext = createContext<Dispatch<ICartAction> | undefined>(
  undefined
);

const cartReducer = produce((draft: ICartItem[], action: ICartAction) => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_ITEM: {
      const existingItem = draft.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        draft.push({ ...action.payload, quantity: 1 });
      }

      break;
    }
    case CART_ACTION_TYPES.REMOVE_ITEM: {
      const index = draft.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        draft.splice(index, 1);
      }

      break;
    }
    case CART_ACTION_TYPES.INCREASE_QUANTITY: {
      const item = draft.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }

      break;
    }
    case CART_ACTION_TYPES.DECREASE_QUANTITY: {
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

  console.log("cartItems::", cartItems);

  return (
    <CartStateContext.Provider value={cartItems}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export const useCartItems = () => {
  const context = useContext(CartStateContext);

  if (context === undefined) {
    throw new Error("useCartItems must be used within a CartProvider");
  }

  return context;
};

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);

  if (context === undefined) {
    throw new Error("useCartDispatch must be used within a CartProvider");
  }

  return context;
};
