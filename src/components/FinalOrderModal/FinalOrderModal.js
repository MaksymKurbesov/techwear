import React from "react";
import styles from "./FinalOrderModal.module.css";

const FinalOrderModal = ({ isVisible, hideModal, orderData }) => {
  return (
    <div
      className={
        isVisible ? styles.finalOrderModalShow : styles.finalOrderModalHide
      }
    >
      <div className={styles.finalOrderModalWrapper}>
        <h2>
          Уважаемый, {orderData.lastName} {orderData.firstName} Ваш заказ
          принят!
        </h2>
        <p>
          Мы скоро с вами свяжемся по номеру телефона:{" "}
          <span>{orderData.phoneNumber}</span>
          <br />
          или email: <span>{orderData.email}</span>
        </p>
        <i onClick={() => hideModal()}>X</i>
        <span>Techwear Team</span>
      </div>
    </div>
  );
};

export default FinalOrderModal;
