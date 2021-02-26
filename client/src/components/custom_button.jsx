import React from "react";

export const CustomButton = ({ children }) => {
  return <div className="custom_btn">{children}</div>;
};

export const ColorBtn = ({ colors }) => {
  return (
    <div className="shop_product_colors">
      {colors.map((color, i) => (
        <span key={i} className="shop_product_colors_item">
          <span
            className="shop_product_colors_item_inner"
            style={{ backgroundColor: color }}
          ></span>
        </span>
      ))}
    </div>
  );
};
