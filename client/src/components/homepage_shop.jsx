import React, { useReducer } from "react";
import {
  shopReducer,
  initialShopState,
} from "../data_&_async requests/shopReducer";
import { CustomButton } from "./custom_button";
import ShopCategorySlider from "./shop_carousel/shop_category_slider";

const HomepageShop = () => {
  const [state] = useReducer(shopReducer, initialShopState);
  const { image, text } = state.homepageShopContent;
  console.log(image);
  return (
    <div className="homepage_shop">
      <div
        className="homepage_shop_image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <CustomButton>{text}</CustomButton>
      </div>

      <ShopCategorySlider />
    </div>
  );
};

export default HomepageShop;
