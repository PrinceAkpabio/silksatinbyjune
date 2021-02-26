import React from "react";
import { CustomButton, ColorBtn } from "./custom_button";
import bag from "../assets/images/shopping_bag.svg";

const ShopProduct = ({ product, dispatch }) => (
  <div className="shop_product">
    <img
      className="shop_product_image"
      src={product.product_image}
      alt={product.product_name}
    />
    <span className="shop_product_details">
      <p className="shop_product_name">{product.product_name}</p>
      <p className="shop_product_price">₦{product.product_price}</p>
    </span>
    <CustomButton>
      <img id="shopping-bag" src={bag} alt="shopping bag" /> Select option
    </CustomButton>
    <ColorBtn colors={product.product_colors} />
  </div>
);

export default ShopProduct;
