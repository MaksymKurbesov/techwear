import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { LINKS } from "../../utils/const";
import styles from "./NavMenu.module.css";

const NavMenu = ({ match }) => {
  const navLinkElements = LINKS.map((link) => {
    return (
      <li
        key={link.to}
        className={`${match.isExact ? styles.navLinksMain : ""}`}
      >
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

export default withRouter(NavMenu);
