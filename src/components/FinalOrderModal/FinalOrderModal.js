import React from "react";
import styles from "./FinalOrderModal.module.css";

const FinalOrderModal = ({ isVisible, hideModal }) => {
  return (
    <div
      className={
        isVisible ? styles.finalOrderModalShow : styles.finalOrderModalHide
      }
    >
      <h2>Ваш заказ принят</h2>
      <p>Мы скоро с вами свяжемся по номеру телефона или эмейлу</p>
      <i onClick={() => hideModal()}>X</i>
    </div>
  );
};

export default FinalOrderModal;
