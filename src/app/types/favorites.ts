import { IProduct } from "./products";

export interface IFavoriteItem extends IProduct {}

export type IFavoritesAction = {
  type: "TOGGLE_FAVORITES";
  payload: IFavoriteItem;
};

export interface IFavoritesContextType {
  favoritesItems: IFavoriteItem[];
  toggleFavorites: (item: IFavoriteItem) => void;
}
