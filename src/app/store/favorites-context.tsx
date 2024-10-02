import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import {
  FAVORITES_ACTION_TYPES,
  IFavoriteItem,
  IFavoritesContextActionsType,
  IFavoritesContextStateType,
} from "../types";
import { favoritesReducer } from "./reducers";

// CODE OPTIMIZATION 2: Create context with separate types for state and actions
const FavoritesStateContext = createContext<
  IFavoritesContextStateType | undefined
>(undefined);
const FavoritesActionsContext = createContext<
  IFavoritesContextActionsType | undefined
>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoritesItems, dispatch] = useReducer(favoritesReducer, []);

  const toggleFavorites = useCallback(
    (item: IFavoriteItem) => {
      dispatch({
        type: FAVORITES_ACTION_TYPES.TOGGLE_FAVORITES,
        payload: item,
      });
    },
    [dispatch]
  );

  const state: IFavoritesContextStateType = { favoritesItems };

  const actions: IFavoritesContextActionsType = useMemo(() => {
    return {
      toggleFavorites,
    };
  }, [toggleFavorites]);

  return (
    <FavoritesActionsContext.Provider value={actions}>
      <FavoritesStateContext.Provider value={state}>
        {children}
      </FavoritesStateContext.Provider>
    </FavoritesActionsContext.Provider>
  );
};

export const useFavoritesState = () => {
  const context = useContext(FavoritesStateContext);

  if (context === undefined) {
    throw new Error(
      "useFavoritesState must be used within a FavoritesStateContext"
    );
  }

  return context;
};

export const useFavoritesActions = () => {
  const context = useContext(FavoritesActionsContext);

  if (context === undefined) {
    throw new Error(
      "useFavoritesActions must be used within a FavoritesActionsContext"
    );
  }

  return context;
};
