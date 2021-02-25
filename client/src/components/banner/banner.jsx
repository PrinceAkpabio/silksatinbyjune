import React from "react";
import { useStore } from "../../data_&_async requests/store";
import BannerContent from "./bannerContent";
import { useCarousel } from "./useCarousel";

const Banner = () => {
  const [state] = useStore();
  const slides = state.bannerContent;
  const length = slides.length;
  const interval = 5000;
  const [active, setActive, handlers, style] = useCarousel(length, interval);
  console.log(slides);
  return (
    length > 0 && (
      <div className="banner carousel">
        <div className="carousel-content" {...handlers} style={style}>
          <BannerContent content={slides[length - 1]} />

          {slides.map((slide, i) => (
            <BannerContent key={i} content={slide} />
          ))}

          <BannerContent content={slides[0]} />
        </div>
        <ul className="carousel-indicators">
          {slides.map((_, index) => (
            <li
              onClick={() => setActive(index)}
              key={index}
              className={`${active === index ? "indx active" : "indx"}`}
            />
          ))}
        </ul>
      </div>
    )
  );
};

export default Banner;
