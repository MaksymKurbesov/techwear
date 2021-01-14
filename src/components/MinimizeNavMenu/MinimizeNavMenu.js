import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MinimizeNavMenu.module.css";

const MinimizeNavMenu = ({ toWear, toAccessory }) => {
  const node = useRef();

  const handleClick = (evt) => {
    if (evt.target.classList.contains(styles.openedMenu)) {
      return;
    }
    node.current.classList.toggle(styles.active);
  };

  const OpenedMenu = () => {
    return (
      <>
        <div className={styles.openedMenu} ref={node}>
          <span onClick={handleClick}>X</span>
          <ul>
            <li>
              <NavLink
                onClick={(evt) => {
                  toWear();
                  handleClick(evt);
                }}
                to="/wear"
              >
                Одежда
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={(evt) => {
                  toAccessory();
                  handleClick(evt);
                }}
                to="/accessory"
              >
                Аксессуары
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/blog">
                Блог
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/delivery">
                Доставка и оплата
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/contacts">
                Контакты
              </NavLink>
            </li>
          </ul>
        </div>
      </>
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
