import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MinimizeNavMenu.module.css";

const MinimizeNavMenu = ({ toWear, toAccessory }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  const OpenedMenu = () => {
    const activeClass = isOpened ? styles.active : "";

    return (
      <>
        <div className={`${styles.openedMenu} ${activeClass}`}>
          <span onClick={handleClick}>X</span>
          <ul>
            <li>
              <NavLink onClick={toWear} to="/wear">
                Одежда
              </NavLink>
            </li>
            <li>
              <NavLink onClick={toAccessory} to="/accessory">
                Аксессуары
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">Блог</NavLink>
            </li>
            <li>
              <NavLink to="/delivery">Доставка и оплата</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Контакты</NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <>
      <div onClick={() => setIsOpened(true)} className={styles.iconMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <OpenedMenu />
    </>
  );
};

export default MinimizeNavMenu;
