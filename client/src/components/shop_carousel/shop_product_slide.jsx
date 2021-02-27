import React from "react";
import { CustomButton, ColorBtn } from "../custom_button";
import bag from "../../assets/images/shopping_bag.svg";
import useTilt from "./tilt";

const ShopProductSlide = ({ product, dispatch, offset }) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  return (
    <div
      ref={ref}
      className={`shop_product_slide ${active ? "" : "slideInactive"} `}
    >
      <div className="shop_product_slide_content">
        <img
          className="shop_product_slide_image"
          src={product.product_image}
          alt={product.product_name}
        />
        <span className="shop_product_slide_details">
          <p className="shop_product_slide_name">{product.product_name}</p>
          <p className="shop_product_slide_price">₦{product.product_price}</p>
        </span>
        <CustomButton>
          <img id="shopping-bag" src={bag} alt="shopping bag" /> Select option
        </CustomButton>
        <ColorBtn colors={product.product_colors} />
      </div>
    </div>
  );
};

export default ShopProductSlide;
