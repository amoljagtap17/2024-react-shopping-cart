import { IProduct } from "./products";

export interface IFavoriteItem extends IProduct {}

export const FAVORITES_ACTION_TYPES = {
  TOGGLE_FAVORITES: "TOGGLE_FAVORITES",
} as const;

export type IFavoritesAction = {
  type: typeof FAVORITES_ACTION_TYPES.TOGGLE_FAVORITES;
  payload: IFavoriteItem;
};

export interface IFavoritesContextType {
  favoritesItems: IFavoriteItem[];
  toggleFavorites: (item: IFavoriteItem) => void;
}
