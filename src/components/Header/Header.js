import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import MinimizeNavMenu from "../MinimizeNavMenu/MinimizeNavMenu";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import styles from "./Header.module.css";

const Header = ({ cartItemsCount, match }) => {
  console.log(match);

  return (
    <header className={`${match.isExact ? styles.headerMain : ""}`}>
      <span className={styles.logotype}>
        <NavLink to="/">TECHWEAR</NavLink>
      </span>
      <MinimizeNavMenu />
      <span className={styles.headerCart}>
        <NavLink to="/cart">{`Корзина [${cartItemsCount}]`}</NavLink>
      </span>
      <NavMenu />
    </header>
  );
};

export default withRouter(Header);
