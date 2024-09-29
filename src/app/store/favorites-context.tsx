import { produce } from "immer";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import {
  FAVORITES_ACTION_TYPES,
  IFavoriteItem,
  IFavoritesAction,
} from "../types";

const FavoritesStateContext = createContext<IFavoriteItem[]>([]);
const FavoritesDispatchContext = createContext<
  Dispatch<IFavoritesAction> | undefined
>(undefined);

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

  console.log("favoritesItems::", favoritesItems);

  return (
    <FavoritesDispatchContext.Provider value={dispatch}>
      <FavoritesStateContext.Provider value={favoritesItems}>
        {children}
      </FavoritesStateContext.Provider>
    </FavoritesDispatchContext.Provider>
  );
};

export const useFavoritesItems = () => {
  const context = useContext(FavoritesStateContext);

  if (context === undefined) {
    throw new Error(
      "useFavoritesItems must be used within a FavoritesProvider"
    );
  }

  return context;
};

export const useFavoritesDispatch = () => {
  const context = useContext(FavoritesDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useFavoritesDispatch must be used within a FavoritesProvider"
    );
  }

  return context;
};
