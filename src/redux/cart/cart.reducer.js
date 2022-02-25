import CartActionTypes from "./cart.types";
import { addItemToCard } from "./card.utils";
const INITAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCard(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
