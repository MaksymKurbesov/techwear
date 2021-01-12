import React from "react";
import CheckoutProductsItem from "./CheckoutProductsItem/CheckoutProductsItem";

const CheckoutProducts = ({ cartItems, detailsById }) => {
  return (
    <ul>
      {cartItems.map((item) => {
        const product = detailsById(item.id);

        return (
          <CheckoutProductsItem
            product={product}
            key={item.id}
            quantity={item.quantity}
          />
        );
      })}
    </ul>
  );
};

export default CheckoutProducts;
