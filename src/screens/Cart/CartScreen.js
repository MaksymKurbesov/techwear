import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import FilledCart from "../../components/FilledCart/FilledCart";
import UnfilledCart from "../../components/UnfilledCart/UnfilledCart";
import { observer, inject } from "mobx-react";

const CartScreen = inject("stores")(
  observer(({ stores }) => {
    const { products } = stores;
    const { cart } = stores;

    const cartItems = cart.items.map((item) => {
      const cartDetailItem = {
        ...products.detailsById(item.id),
        quantity: item.quantity,
      };
      return (
        <CartItem
          product={cartDetailItem}
          size={item.size}
          key={item.id}
          removeItem={cart.removeItem}
          changeQuantity={cart.changeQuantity}
        />
      );
    });

    if (cart.items.length) {
      return (
        <FilledCart total={cart.total} clean={cart.clean}>
          {cartItems}
        </FilledCart>
      );
    }

    return <UnfilledCart />;
  })
);

export default CartScreen;
