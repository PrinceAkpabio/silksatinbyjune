import React from "react";

const BannerContent = ({ content }) => (
  <div
    className="banner_image"
    style={{ backgroundImage: `url(${content.bannerImage})` }}
  >
    <h2>{content.bannerText1}</h2>
    <h2>{content.bannerText2}</h2>
  </div>
);

export default BannerContent;
