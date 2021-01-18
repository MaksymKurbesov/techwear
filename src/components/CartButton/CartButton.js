import React from "react";
import styles from "./CartButton.module.css";
import { observer } from "mobx-react";

const CartButton = observer(({ cart, id, choosedSize }) => {
  const isAddedToCart = cart.hasCartItem(id);
  const buttonTitle = isAddedToCart
    ? "Удалить из корзины"
    : "Добавить в корзину";

  const handleRemoveItem = () => {
    cart.removeItem(parseInt(id));
  };
  const handleAddItem = () => {
    cart.addItem(parseInt(id), choosedSize);
  };

  return (
    <button
      disabled={!choosedSize}
      className={styles.CartButton}
      onClick={!isAddedToCart ? handleAddItem : handleRemoveItem}
    >
      {buttonTitle}
    </button>
  );
});

export default CartButton;
