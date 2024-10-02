import { produce } from "immer";
import { CART_ACTION_TYPES, ICartAction, ICartItem } from "../../types";

export const cartReducer = produce(
  (draft: ICartItem[], action: ICartAction) => {
    switch (action.type) {
      case CART_ACTION_TYPES.ADD_ITEM: {
        const existingItem = draft.find(
          (item) => item.id === action.payload.id
        );

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
  },
  []
);
