import React, { useReducer } from "react";
import {
  shopReducer,
  initialShopState,
} from "../../data_&_async requests/shopReducer";
import ShopProduct from "./shop_product";
const ShopCategory = () => {
  const [state, dispatch] = useReducer(shopReducer, initialShopState);
  const { homepageShop } = state;
  return (
    <div className="shop container">
      {homepageShop.map((product, i) => (
        <ShopProduct key={i} dispatch={dispatch} product={product} />
      ))}
    </div>
  );
};

export default ShopCategory;
