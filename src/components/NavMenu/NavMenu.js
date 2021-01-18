import React from "react";
import { NavLink } from "react-router-dom";
import { LINKS } from "../../utils/const";
import styles from "./NavMenu.module.css";

const NavMenu = () => {
  const navLinkElements = LINKS.map((link) => {
    return (
      <li key={link.to}>
        <NavLink activeClassName={styles.activeLink} to={link.to}>
          {link.label}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul className={styles.navLinks}>{navLinkElements}</ul>
    </nav>
  );
};

export default NavMenu;
