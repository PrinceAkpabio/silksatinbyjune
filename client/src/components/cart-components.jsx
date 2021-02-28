import React from "react";
import { CustomButton } from "./custom_button";
import { toggleCartHidden } from "../data_&_async requests/cartReducer";
import { ReactComponent as ShoppingIcon } from "../assets/images/shopping-bag.svg";

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <span className="name">{name}</span>
    <span className="price">
      {quantity} x ${price}
    </span>
  </div>
);

export const CartIcon = ({ dispatch }) => {
  const toogleHidden = () => dispatch(toggleCartHidden());
  return (
    <div className="cart-icon" onClick={toogleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
