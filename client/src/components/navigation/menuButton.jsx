import React from "react";
import { CartIcon } from "../cart-components";

export default function MenuButton({ menu, ToggleMenu, navRef, dispatch }) {
  return (
    <span className="Nav-mb-menu">
      <CartIcon dispatch={dispatch} />
      {menu ? (
        <ion-icon
          ref={navRef}
          onClick={ToggleMenu}
          name="close-outline"
        ></ion-icon>
      ) : (
        <ion-icon
          ref={navRef}
          onClick={ToggleMenu}
          name="menu-outline"
        ></ion-icon>
      )}
    </span>
  );
}
