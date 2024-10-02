import { produce } from "immer";
import {
  FAVORITES_ACTION_TYPES,
  IFavoriteItem,
  IFavoritesAction,
} from "../../types";

export const favoritesReducer = produce(
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
