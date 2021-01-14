import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import MinimizeNavMenu from "../MinimizeNavMenu/MinimizeNavMenu";
import { NavLink } from "react-router-dom";
import { observer, inject } from "mobx-react";

import styles from "./Header.module.css";

const Header = inject("stores")(
  observer(({ stores }) => {
    const CartModel = stores.cart;

    const handleClickToWear = () => {
      stores.products.setCategory("wear");
      stores.products.setFilter("");
    };

    const handleClickToAccessory = () => {
      stores.products.setCategory("accessory");
    };

    return (
      <header>
        <span className={styles.logotype}>
          <NavLink to="/">TECHWEAR</NavLink>
        </span>
        <MinimizeNavMenu
          toAccessory={handleClickToAccessory}
          toWear={handleClickToWear}
        />
        <span className={styles.headerCart}>
          <NavLink to="/cart">{`Корзина [${CartModel.items.length}]`}</NavLink>
        </span>
        <NavMenu
          toWear={handleClickToWear}
          toAccessory={handleClickToAccessory}
        />
      </header>
    );
  })
);

export default Header;
