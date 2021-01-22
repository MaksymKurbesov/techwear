import React from "react";
import FilledCart from "../../components/FilledCart/FilledCart";
import UnfilledCart from "../../components/UnfilledCart/UnfilledCart";
import { observer, inject } from "mobx-react";

const CartScreen = inject("stores")(
  observer(({ stores }) => {
    const { products } = stores;
    const { cart } = stores;

    if (!cart.items.length) {
      return <UnfilledCart />;
    }
    return <FilledCart cartStore={cart} detailsById={products.detailsById} />;
  })
);

export default CartScreen;
