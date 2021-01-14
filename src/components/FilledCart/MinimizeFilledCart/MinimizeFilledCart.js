import React from "react";
import CartButtons from "../CartButtons/CartButtons";
import styles from "./MinimizeFilledCart.module.css";

const AdaptiveFilledCart = ({ detailedItems, cartStore }) => {
  const cartItems = detailedItems.map((item, i) => {
    return (
      <li className={styles.filledCartItem} key={i}>
        <img src={item.img} width="75" height="75" />
        <div className={styles.cartItemInfo}>
          <p className={styles.model}>{item.model}</p>
          <p className={styles.brand}>{item.brand}</p>
          <div className={styles.price}>
            {`${item.price} ₴`}
            <span>
              <button
                disabled={!item.quantity}
                onClick={() => {
                  cartStore.setQuantity(item.id, -1, true);
                }}
              >
                -
              </button>
              <output>{item.quantity}</output>
              <button
                disabled={item.quantity >= item.rest}
                onClick={() => cartStore.setQuantity(item.id, 1, true)}
              >
                +
              </button>
            </span>
          </div>
        </div>
        <i onClick={() => cartStore.removeItem(item.id)}>X</i>
      </li>
    );
  });

  return (
    <>
      <ul className={styles.filledCart}>{cartItems}</ul>
      <CartButtons clean={cartStore.clean} />
    </>
  );
};

export default AdaptiveFilledCart;
