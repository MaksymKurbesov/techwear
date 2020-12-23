import React from "react";

import { observer, inject } from "mobx-react";

import styles from "./AddToCartButton.module.css";

const AddToCartButton = inject("stores")(
  observer(({ stores, id, choosedSize }) => {
    const { cart } = stores;

    if (cart.hasCartItem(id)) {
      return (
        <button
          className={styles.removeCartButton}
          onClick={() => {
            cart.removeItem(parseInt(id));
          }}
        >
          Удалить из корзины
        </button>
      );
    } else {
      return (
        <button
          disabled={!choosedSize}
          className={styles.addCartButton}
          onClick={() => {
            cart.addItem(parseInt(id), choosedSize);
          }}
        >
          Добавить в корзину
        </button>
      );
    }
  })
);

export default AddToCartButton;
