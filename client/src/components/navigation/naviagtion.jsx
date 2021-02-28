import React, { useState, useEffect, useRef, useReducer } from "react";
import MenuButton from "./menuButton";
import MenuList, { Logo } from "./menuList";
import {
  cartReducer,
  INITAIL_STATE,
} from "../../data_&_async requests/cartReducer";
import { CartDropDown } from "../cart-components";

const Naviagtion = () => {
  const [menu, setMenu] = useState(false);
  const navRef = useRef();
  const [state, dispatch] = useReducer(cartReducer, INITAIL_STATE);

  const { hidden, cartItems } = state;

  const ToggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };
  const handleClickOutside = (e) => {
    if (!navRef.current.contains(e.target)) {
      setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    };

    if (menu) {
      document.documentElement.style.getPropertyValue("--scroll-y");
      const body = document.body;
      body.style.height = "100vh";
      body.style.overflowY = "hidden";
    } else if (!menu) {
      document.documentElement.style.getPropertyValue("--scroll-y");
      const body = document.body;
      body.style.height = "";
      body.style.overflowY = "";
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menu]);

  return (
    <div className="Nav">
      <Logo />
      <MenuList dispatch={dispatch} menu={menu} />
      {hidden ? null : <CartDropDown cartItems={cartItems} />}
      <MenuButton
        dispatch={dispatch}
        ToggleMenu={ToggleMenu}
        menu={menu}
        navRef={navRef}
      />
    </div>
  );
};

export default Naviagtion;
