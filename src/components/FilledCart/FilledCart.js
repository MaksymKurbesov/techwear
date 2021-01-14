import React from "react";
import CartItem from "./CartItem/CartItem";
import MinimizeFilledCart from "./MinimizeFilledCart/MinimizeFilledCart";
import FilledCartHeaders from "./FilledCartHeaders/FilledCartHeaders";
import CartButtons from "./CartButtons/CartButtons";
import styles from "./FilledCart.module.css";
import { observer, inject } from "mobx-react";

const FilledCart = inject("stores")(
  observer(({ detailsById, cartStore }) => {
    const makeDetailedItem = (item) => {
      const cartDetailedItem = {
        ...detailsById(item.id),
        ...item,
      };

      return cartDetailedItem;
    };

    const cartItemElements = cartStore.items.map((item) => {
      return (
        <CartItem
          product={makeDetailedItem(item)}
          key={item.id}
          removeItem={cartStore.removeItem}
          setQuantity={cartStore.setQuantity}
        />
      );
    });

    const cartDetailedItems = cartStore.items.map(makeDetailedItem);

    const isSmallWindow = document.documentElement.clientWidth < 900;

    if (isSmallWindow) {
      return (
        <MinimizeFilledCart
          detailedItems={cartDetailedItems}
          cartStore={cartStore}
        />
      );
    }

    return (
      <table className={styles.table}>
        <tbody>
          <FilledCartHeaders />
          {cartItemElements}
          <tr>
            <td colSpan="5"></td>
            <td className={styles.total}>Итого: ₴ {cartStore.total}</td>
            <td></td>
          </tr>
          <CartButtons clean={cartStore.clean} />
        </tbody>
      </table>
    );
  })
);

export default FilledCart;
