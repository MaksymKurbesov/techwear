import React, { useState } from "react";
import Form from "../../components/Form/Form";
import FinalOrderModal from "../../components/FinalOrderModal/FinalOrderModal";
import CheckoutProductsItem from "../../components/CheckoutProductsItem/CheckoutProductsItem";
import CheckoutDeliveryInfo from "../../components/CheckoutDeliveryInfo/CheckoutDeliveryInfo";
import { observer, inject } from "mobx-react";
import styles from "./CheckoutScreen.module.css";

const CheckoutScreen = inject("stores")(
  observer(({ stores }) => {
    const [isVisible, setIsVisible] = useState(false);
    const formStore = stores.form;
    const showModal = () => {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    };
    const hideModal = () => {
      setIsVisible(false);
      document.body.style.overflow = "visible";
    };
    const checkoutElements = stores.cart.items.map((item) => {
      const product = stores.products.detailsById(item.id);

      return (
        <CheckoutProductsItem
          product={product}
          key={item.id}
          quantity={item.quantity}
        />
      );
    });

    return (
      <div className={styles.checkout}>
        <Form />
        <div className={styles.products}>
          <ul>{checkoutElements}</ul>
          <div className={styles.total}>
            <p>
              Доставка:{" "}
              <span>
                {formStore.delivery === ""
                  ? `Выберите способ доставки`
                  : `₴ ${formStore.delivery}.00`}
              </span>
            </p>
            <p>
              Итого: <span>₴ {stores.cart.total + +formStore.delivery}.00</span>
            </p>
          </div>
        </div>
        <CheckoutDeliveryInfo setDelivery={formStore.setDelivery} />
        <div className={styles.toFormButton}>
          <button onClick={showModal}>Оформить заказ</button>
        </div>
        <FinalOrderModal isVisible={isVisible} hideModal={hideModal} />
      </div>
    );
  })
);

export default CheckoutScreen;
