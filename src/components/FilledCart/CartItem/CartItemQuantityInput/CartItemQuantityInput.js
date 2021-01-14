import React from "react";
import styles from "./CartItemQuantityInput.module.css";

const CartItemQuantityInput = ({ quantity, setQuantity }) => {
  return (
    <input
      className={styles.quantity}
      type="text"
      value={quantity}
      onChange={setQuantity}
    />
  );
};

export default CartItemQuantityInput;
