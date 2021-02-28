import React from "react";
import { MenuItems, LogoItem } from "./menuItems";
import { CartIcon } from "../cart-components";
import { Link } from "react-scroll";
import { Link as NavLink } from "react-router-dom";

export const Logo = () => (
  <NavLink id="Nav-logo" to="/">
    <span
      style={{
        backgroundImage: `url(${LogoItem.logo})`,
      }}
      id="Nav-logo1"
    ></span>
  </NavLink>
);

export default function MenuList({ menu, dispatch }) {
  return (
    <div className={`Nav-menu-wrapper ${menu && "active"}`}>
      <ul className="Nav-menu">
        {MenuItems.map((Menu, idx) => (
          <li className={`Nav-menu-items ${menu && "active"}`} key={idx}>
            <Link
              className="menu-links"
              to={Menu.link}
              activeClass="active"
              smooth={true}
              duration={500}
            >
              {Menu.name}
            </Link>
          </li>
        ))}
        <CartIcon dispatch={dispatch} />
      </ul>
    </div>
  );
}
