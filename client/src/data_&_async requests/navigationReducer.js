import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import pinterest from "../assets/images/pinterest.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";
import paypal from "../assets/images/paypal.svg";
import mastercard from "../assets/images/mastercard.svg";
import paystack from "../assets/images/Paystack Logo.svg";
import visa from "../assets/images/visa.svg";

export const FOOTER_ACTIONS = {
  CLICK: "CLICK",
};

export const initialFooterState = {
  linkWrapper: [
    {
      title: "Quick Links",
      links: [
        { name: "FAQs", link: "#" },
        { name: "Shipping + Returns", link: "#" },
        { name: "Afterpay", link: "#" },
        { name: "In-Store Perks", link: "#" },
        { name: "Contact Us", link: "#" },
      ],
    },
    {
      title: "Get Shopping",
      links: [
        { name: "New Arrivals", link: "#" },
        { name: "Clothing", link: "#" },
        { name: "Accessories", link: "#" },
        { name: "Sale", link: "#" },
        { name: "Gift Cards", link: "#" },
      ],
    },
    {
      title: "Connect with us",
      links: [
        { icon: instagram, link: "#" },
        { icon: facebook, link: "#" },
        { icon: pinterest, link: "#" },
        { icon: twitter, link: "#" },
        { icon: youtube, link: "#" },
      ],
      icon: "five",
    },
    {
      title: "Payment Methods",
      links: [
        { icon: paypal, link: "#" },
        { icon: mastercard, link: "#" },
        { icon: paystack, link: "#" },
        { icon: visa, link: "#" },
      ],
      icon: "four",
    },
  ],
};

export const navigationReducer = (state, action) => {
  switch (action.type) {
    case FOOTER_ACTIONS.CLICK:
      return {
        ...state,
        linkWrapper: [...state.linkWrapper],
      };
    default:
      return state;
  }
};
