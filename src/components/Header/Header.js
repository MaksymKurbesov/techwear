import React from "react";
import { NavLink } from "react-router-dom";
import { observer, inject } from "mobx-react";

import styles from "./Header.module.css";

const Header = inject("stores")(
  observer(({ stores }) => {
    const CartModel = stores.cart;

    return (
      <header>
        <span className={styles.logotype}>
          <NavLink to="/">TECHWEAR</NavLink>
        </span>
        <span className={styles.headerCart}>
          <NavLink to="/cart">{`Корзина [${CartModel.items.length}]`}</NavLink>
        </span>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <NavLink
                activeClassName={styles.activeLink}
                onClick={() => {
                  stores.products.setCategory("wear");
                  stores.products.setFilter("");
                }}
                to="/wear"
              >
                Одежда
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={styles.activeLink}
                onClick={() => stores.products.setCategory("accessory")}
                to="/accessory"
              >
                Аксессуары
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.activeLink} to="/blog">
                Блог
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.activeLink} to="/shipping">
                Доставка и оплата
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={styles.activeLink} to="/contacts">
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  })
);

export default Header;
