import React from "react";
import PageInformation from "../components/page_information";
import ShopCategory from "../components/shop_category/shop_category";

const ShopPage = () => {
  return (
    <div className="shoppage container">
      <PageInformation />
      <ShopCategory />
    </div>
  );
};

export default ShopPage;
