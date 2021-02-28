import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import {
  navigationReducer,
  initialFooterState,
} from "../../data_&_async requests/navigationReducer";

const LinkWrapper = ({ wrapper }) => (
  <div className="footer_linkswrapper">
    <h4 className="footer_linkswrapper_title">{wrapper.title}</h4>
    <span
      className={`footer_linkswrapper_links ${
        wrapper.icon && `${wrapper.icon}`
      }`}
    >
      {wrapper.links.map((link, i) =>
        link.name ? (
          <Link key={i} to={link.link}>
            <h4 className="footer_linkswrapper_links_contact">{link.name}</h4>
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

const LogoWrapper = ({ content }) => {
  const today = new Date();
  const utcYear = today.getUTCFullYear();
  const { logo, links, trademark } = content;
  return (
    <>
      <h3 className="footer_item_two_title">{logo}</h3>
      <span className="footer_item_two_links">
        {links.map((link, i) => (
          <span className="footer_item_two_links_item" key={i}>
            <Link to={link.link}>{link.name}</Link>
            {link.line}
          </span>
        ))}
      </span>
      <span className="footer_item_two_trademark">
        <h4>&copy;{utcYear}</h4>
        {trademark}
      </span>
    </>
  );
};
const Footer = () => {
  const [state] = useReducer(navigationReducer, initialFooterState);
  const { linkWrapper, logoWrapper } = state;
  return (
    <div className="footer">
      <div className="footer_item_one">
        {linkWrapper.map((wrapper, i) => (
          <LinkWrapper key={i} wrapper={wrapper} />
        ))}
      </div>
      <span id="footer_divide" />
      <div className="footer_item_two">
        {<LogoWrapper content={logoWrapper} />}
      </div>
    </div>
  );
};

export default Footer;
