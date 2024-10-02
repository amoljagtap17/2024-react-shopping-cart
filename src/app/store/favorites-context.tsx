import { produce } from "immer";
import { createContext, ReactNode, useContext, useReducer } from "react";
import {
  FAVORITES_ACTION_TYPES,
  IFavoriteItem,
  IFavoritesAction,
  IFavoritesContextType,
} from "../types";

const FavoritesContext = createContext<IFavoritesContextType | undefined>(
  undefined
);

const favoritesReducer = produce(
  (draft: IFavoriteItem[], action: IFavoritesAction) => {
    switch (action.type) {
      case FAVORITES_ACTION_TYPES.TOGGLE_FAVORITES: {
        const index = draft.findIndex((item) => item.id === action.payload.id);

        if (index !== -1) {
          draft.splice(index, 1);
        } else {
          draft.push(action.payload);
        }

        break;
      }
      default:
        return draft;
    }
  },
  []
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
