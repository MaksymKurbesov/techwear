import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import MinimizeNavMenu from "../MinimizeNavMenu/MinimizeNavMenu";
import CartIcon from "../../assets/images/cart.svg";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import styles from "./Header.module.css";

const Header = ({ cartItemsCount, match }) => {
  const isMobile = document.documentElement.clientWidth < 500;

  return (
    <header className={`${match.isExact ? styles.headerMain : ""}`}>
      <span className={styles.logotype}>
        <NavLink to="/">TECHWEAR</NavLink>
      </span>
      <MinimizeNavMenu />
      <span className={styles.headerCart}>
        <NavLink to="/cart">
          {isMobile ? `[${cartItemsCount}]` : `Корзина [${cartItemsCount}]`}
          {isMobile ? <img src={CartIcon} alt="Иконка корзины" /> : ""}
        </NavLink>
      </span>
      <NavMenu />
    </header>
  );
};

export default withRouter(Header);
