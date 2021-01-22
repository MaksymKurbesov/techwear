import React from "react";
import styles from "./MainScreen.module.css";
import video from "../../assets/videoBg.mp4";

const MainScreen = () => {
  const VideoBackground = () => (
    <div className={styles.videoBg} id="video-bg">
      <video preload="auto" autoPlay="autoplay" loop="loop">
        <source src={video} type="video/mp4"></source>
      </video>
    </div>
  );

  return (
    <>
      <VideoBackground />
      <div className={styles.main}>
        <div className={styles.mainText}>
          <h2>Онлайн-магазин мужской одежды и аксессуаров</h2>
          <p>
            Мы выбираем лучшие релизы молодых techwear брендов по всему миру и
            делаем их доступными в Украине и за рубежом.
          </p>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
