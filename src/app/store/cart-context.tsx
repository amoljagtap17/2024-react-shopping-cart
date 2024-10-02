import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import {
  CART_ACTION_TYPES,
  ICartContextActionsType,
  ICartContextStateType,
  ICartItem,
} from "../types";
import { cartReducer } from "./reducers";

// CODE OPTIMIZATION 1: Create context with separate types for state and actions
const CartStateContext = createContext<ICartContextStateType | undefined>(
  undefined
);
const CartActionsContext = createContext<ICartContextActionsType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  console.log("cartItems::", cartItems);

  const addItemToCart = useCallback(
    (item: ICartItem) => {
      dispatch({ type: CART_ACTION_TYPES.ADD_ITEM, payload: item });
    },
    [dispatch]
  );

  const removeItemFromCart = useCallback(
    (id: number) => {
      dispatch({ type: CART_ACTION_TYPES.REMOVE_ITEM, payload: id });
    },
    [dispatch]
  );

  const increaseQuantity = useCallback(
    (id: number) => {
      dispatch({ type: CART_ACTION_TYPES.INCREASE_QUANTITY, payload: id });
    },
    [dispatch]
  );

  const decreaseQuantity = useCallback(
    (id: number) => {
      dispatch({ type: CART_ACTION_TYPES.DECREASE_QUANTITY, payload: id });
    },
    [dispatch]
  );

  // CODE OPTIMIZATION 1: Create separate state and actions values
  const state: ICartContextStateType = {
    cartItems,
  };

  const actions: ICartContextActionsType = useMemo(() => {
    return {
      addItemToCart,
      removeItemFromCart,
      increaseQuantity,
      decreaseQuantity,
    };
  }, [addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity]);

  // CODE OPTIMIZATION 1: use separate providers for state and actions
  return (
    <CartActionsContext.Provider value={actions}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartActionsContext.Provider>
  );
};

// CODE OPTIMIZATION 1: Create separate hooks for state and actions
export const useCartState = () => {
  const context = useContext(CartStateContext);

  if (context === undefined) {
    throw new Error("useCartState must be used within a CartStateContext");
  }

  return context;
};

export const useCartActions = () => {
  const context = useContext(CartActionsContext);

  if (context === undefined) {
    throw new Error("useCartActions must be used within a CartActionsContext");
  }

  return context;
};
