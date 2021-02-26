import React from "react";
import AboutSection from "../components/aboutSection";
import Banner from "../components/banner/banner";
import ShopCategory from "../components/shop_category";

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <AboutSection />
      <ShopCategory />
    </div>
  );
};

export default HomePage;
