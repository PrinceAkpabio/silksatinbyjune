import React from "react";
import { useParams } from "react-router-dom";
import PageInformation from "../components/page_information";
import ShopCategory from "../components/shop_category/shop_category";

const ShopPageCategory = () => {
  const { shopId } = useParams();
  return (
    <div className="shoppage container">
      <PageInformation pagename={shopId} />
      <ShopCategory />
    </div>
  );
};

export default ShopPageCategory;
