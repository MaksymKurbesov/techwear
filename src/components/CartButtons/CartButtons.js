import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartButtons.module.css";

const CartButtons = ({ clean }) => {
  return (
    <tr className={styles.buttonsRow}>
      <td colSpan="3"></td>
      <td className={styles.buttons} colSpan="3">
        <button onClick={() => clean()} className={styles.clearButton}>
          Очистить корзину
        </button>
        <Link to="/checkout" className={styles.checkoutButton}>
          Оформить заказ
        </Link>
      </td>
      <td></td>
    </tr>
  );
};

export default CartButtons;
