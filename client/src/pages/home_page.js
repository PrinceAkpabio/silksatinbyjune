import React from "react";
import AboutSection from "../components/aboutSection";
import Banner from "../components/banner/banner";
import HomepageShop from "../components/homepage_shop";
import ShopCategory from "../components/shop_category/shop_category";
import Subscription from "../components/subscription";

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <AboutSection />
      <ShopCategory />
      <HomepageShop />
      <Subscription />
    </div>
  );
};

export default HomePage;
