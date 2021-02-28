import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import {
  navigationReducer,
  initialFooterState,
} from "../../data_&_async requests/navigationReducer";

const LinkWrapper = ({ wrapper }) => (
  <div className="footer_linkswrapper">
    <h3 className="footer_linkswrapper_title">{wrapper.title}</h3>
    <span
      className={`footer_linkswrapper_links ${
        wrapper.icon && `${wrapper.icon}`
      }`}
    >
      {wrapper.links.map((link, i) =>
        link.name ? (
          <Link key={i} to={link.link}>
            <p className="footer_linkswrapper_links_contact">{link.name}</p>
          </Link>
        ) : (
          <Link key={i} to={link.link}>
            <img
              src={link.icon}
              className="footer_linkswrapper_links_social"
              alt={link.link}
            />
          </Link>
        )
      )}
    </span>
  </div>
);
const Footer = () => {
  const [state] = useReducer(navigationReducer, initialFooterState);
  const { linkWrapper } = state;
  return (
    <div className="footer">
      <div className="footer_item_one">
        {linkWrapper.map((wrapper, i) => (
          <LinkWrapper key={i} wrapper={wrapper} />
        ))}
      </div>
      <span id="footer_divide" />
      <div className="footer_item_two"></div>
    </div>
  );
};

export default Footer;
