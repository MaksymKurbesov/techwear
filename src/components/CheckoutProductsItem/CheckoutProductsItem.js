import React from "react";
import styles from "./CheckoutProductsItem.module.css";

const CheckoutProductsItem = ({ product, quantity }) => {
  return (
    <li className={styles.productItem} key={product.id}>
      <img
        className={styles.photo}
        src={product.img}
        width="100"
        height="100"
      />
      <div className={styles.info}>
        <p className={styles.model}>{product.model}</p>
        <span>
          {product.brand} / {product.color}
        </span>
        <p className={styles.price}>
          ₴ {product.price} x {quantity}
        </p>
      </div>
    </li>
  );
};

export default CheckoutProductsItem;
