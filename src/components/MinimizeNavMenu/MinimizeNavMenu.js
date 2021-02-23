import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { LINKS } from "../../utils/const";
import styles from "./MinimizeNavMenu.module.css";
import { withRouter } from "react-router";

const MinimizeNavMenu = ({ match }) => {
  const node = useRef();
  let className = match.isExact ? styles.iconMenuMain : styles.iconMenu;
  console.log(match.isExact);

  const handleClick = (evt) => {
    if (evt.target.classList.contains(styles.openedMenu)) {
      return;
    }
    node.current.classList.toggle(styles.active);
  };

  const navLinkElements = LINKS.map((link) => {
    return (
      <li key={link.to}>
        <NavLink onClick={handleClick} to={link.to}>
          {link.label}
        </NavLink>
      </li>
    );
  });

  const OpenedMenu = () => {
    return (
      <div className={styles.openedMenu} ref={node}>
        <span onClick={handleClick}>X</span>
        <ul>{navLinkElements}</ul>
      </div>
    );
  };

  return (
    <>
      <div className={className} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <OpenedMenu />
    </>
  );
};

export default withRouter(MinimizeNavMenu);
