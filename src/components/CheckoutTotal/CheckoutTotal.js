import React from "react";
import styles from "./CheckoutTotal.module.css";

const CheckoutTotal = ({ formik, cartTotal }) => {
  return (
    <div className={styles.total}>
      <p>
        Доставка:{" "}
        <span>
          {formik.values.delivery === ""
            ? `Выберите способ доставки`
            : `₴ ${formik.values.delivery}.00`}
        </span>
      </p>
      <p>
        Итого: <span>₴ {cartTotal + +formik.values.delivery}.00</span>
      </p>
    </div>
  );
};

export default CheckoutTotal;
