import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartButtons.module.css";

const CartButtons = ({ clean }) => {
  const ClearButton = () => (
    <button onClick={() => clean()} className={styles.clearButton}>
      Очистить корзину
    </button>
  );

  const CheckoutButton = () => (
    <Link to="/checkout" className={styles.checkoutButton}>
      Оформить заказ
    </Link>
  );

  const isSmallWindow = document.documentElement.clientWidth < 900;

  if (isSmallWindow) {
    return (
      <div className={styles.buttons}>
        <ClearButton />
        <CheckoutButton />
      </div>
    );
  }

  return (
    <tr className={styles.buttonsRow}>
      <td colSpan="3"></td>
      <td className={styles.buttons} colSpan="3">
        <ClearButton />
        <CheckoutButton />
      </td>
      <td></td>
    </tr>
  );
};

export default CartButtons;
