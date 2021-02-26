import React from "react";
import AboutSection from "../components/aboutSection";
import Banner from "../components/banner/banner";

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <AboutSection />
    </div>
  );
};

export default HomePage;
