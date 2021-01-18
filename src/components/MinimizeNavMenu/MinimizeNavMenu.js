import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { LINKS } from "../../utils/const";
import styles from "./MinimizeNavMenu.module.css";

const MinimizeNavMenu = () => {
  const node = useRef();

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
      <div className={styles.iconMenu} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <OpenedMenu />
    </>
  );
};

export default MinimizeNavMenu;
