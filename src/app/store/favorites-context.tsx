import { createContext, ReactNode, useContext, useReducer } from "react";
import {
  FAVORITES_ACTION_TYPES,
  IFavoriteItem,
  IFavoritesContextType,
} from "../types";
import { favoritesReducer } from "./reducers";

const FavoritesContext = createContext<IFavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoritesItems, dispatch] = useReducer(favoritesReducer, []);

  const toggleFavorites = (item: IFavoriteItem) => {
    dispatch({
      type: FAVORITES_ACTION_TYPES.TOGGLE_FAVORITES,
      payload: item,
    });
  };

  const values: IFavoritesContextType = {
    favoritesItems,
    toggleFavorites,
  };

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
};
