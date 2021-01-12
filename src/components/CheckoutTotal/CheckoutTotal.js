import React from "react";
import styles from "./CheckoutTotal.module.css";

const CheckoutTotal = ({ delivery, cartTotal }) => {
  return (
    <div className={styles.total}>
      <p>
        Доставка:{" "}
        <span>
          {delivery === "" ? `Выберите способ доставки` : `₴ ${delivery}.00`}
        </span>
      </p>
      <p>
        Итого: <span>₴ {cartTotal + +delivery}.00</span>
      </p>
    </div>
  );
};

export default CheckoutTotal;
