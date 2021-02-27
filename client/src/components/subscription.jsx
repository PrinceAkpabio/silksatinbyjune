import React from "react";
import { CustomButton } from "./custom_button";

const Subscription = () => (
  <div className="subscription">
    <span className="subscription_cta">
      <p>Get the latest updates on new products and upcoming sales</p>
    </span>
    <div className="subscription_input">
      <input
        className="subscription_input_email"
        placeholder="Your Email Address"
      />
      <CustomButton>Subscribe</CustomButton>
    </div>
  </div>
);

export default Subscription;
