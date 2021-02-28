import { addItemToCart } from "../data_&_async requests/cart.utilis";

export const INITAIL_STATE = {
  hidden: true,
  cartItems: [],
};

export const CartActionType = {
  TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
  ADD_ITEM: "ADD_ITEM",
};

export const toggleCartHidden = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionType.ADD_ITEM,
  payload: item,
});
export const cartReducer = (state, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

// export default cartReducer;
