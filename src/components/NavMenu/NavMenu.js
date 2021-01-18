import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.css";

const NavMenu = () => {
  return (
    <nav>
      <ul className={styles.navLinks}>
        <li>
          <NavLink activeClassName={styles.activeLink} to="/wear">
            Одежда
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.activeLink} to="/accessory">
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
  );
};

export default NavMenu;
