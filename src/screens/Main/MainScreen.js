import React from "react";
import Background from "./main.png";
import styles from "./MainScreen.module.css";

const MainScreen = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainText}>
        <h2>Онлайн-магазин мужской одежды и аксессуаров</h2>
        <p>
          Мы выбираем лучшие релизы молодых techwear брендов по всему миру и
          делаем их доступными в Украине и за рубежом.
        </p>
      </div>
      <img className={styles.mainImage} src={Background} width="400" />
    </div>
  );
};

export default MainScreen;
