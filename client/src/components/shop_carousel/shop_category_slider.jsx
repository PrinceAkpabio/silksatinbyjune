import React, { useReducer } from "react";

import {
  shopReducer,
  initialShopState,
  SHOP_ACTIONS,
} from "../../data_&_async requests/shopReducer";

import prev from "../../assets/images/Prev.svg";
import next from "../../assets/images/next.svg";
import ShopProductSlide from "./shop_product_slide";

const ShopCategorySlider = () => {
  const [state, dispatch] = useReducer(shopReducer, initialShopState);
  const { homepageShop, slideIndex } = state;
  return (
    <div className="shop_slider container">
      <img
        className="shop_slider_arrow prev"
        onClick={() => dispatch({ type: SHOP_ACTIONS.PREV })}
        src={prev}
        alt="previous button"
      />
      {homepageShop.map((product, i) => {
        let offset = slideIndex - i;
        return (
          <ShopProductSlide
            key={i}
            dispatch={dispatch}
            product={product}
            offset={offset}
          />
        );
      })}
      <img
        className="shop_slider_arrow next"
        onClick={() => dispatch({ type: SHOP_ACTIONS.NEXT })}
        src={next}
        alt="next button"
      />
    </div>
  );
};

export default ShopCategorySlider;
