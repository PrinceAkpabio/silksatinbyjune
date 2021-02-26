import React, { useReducer } from "react";
import {
  bannerReducer,
  initialBannerState,
} from "../data_&_async requests/bannerReducer";
const AboutSection = () => {
  const [state] = useReducer(bannerReducer, initialBannerState);
  const { title, text, background } = state.aboutContent;
  return (
    <div className="about" style={{ backgroundImage: `url(${background})` }}>
      <h3 className="about_title">{title}</h3>
      <p className="about_text">{text}</p>
    </div>
  );
};

export default AboutSection;
