import React, { useState } from "react";
import Form from "../../components/Form/Form";
import FinalOrderModal from "../../components/FinalOrderModal/FinalOrderModal";
import CheckoutProductsItem from "../../components/CheckoutProductsItem/CheckoutProductsItem";
import CheckoutDeliveryInfo from "../../components/CheckoutDeliveryInfo/CheckoutDeliveryInfo";
import CheckoutTotal from "../../components/CheckoutTotal/CheckoutTotal";

import { observer, inject } from "mobx-react";
import { useFormik } from "formik";
import styles from "./CheckoutScreen.module.css";

const CheckoutScreen = inject("stores")(
  observer(({ stores }) => {
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [orderData, setOrderData] = useState({});
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        delivery: "",
      },
      onSubmit: (values, { resetForm }) => {
        const savedData = {};
        for (const value in values) {
          savedData[value] = values[value];
        }
        setOrderData(savedData);
        showModal();
        resetForm();
        stores.cart.clean();
      },
    });

    const showModal = () => {
      setIsVisibleModal(true);
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "16px";
    };

    const hideModal = () => {
      setIsVisibleModal(false);
      document.body.style.overflow = "visible";
      document.body.style.marginRight = "0";
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
        <Form formik={formik} />
        <div className={styles.products}>
          <ul>{checkoutElements}</ul>
          <CheckoutTotal formik={formik} cartTotal={stores.cart.total} />
        </div>
        <CheckoutDeliveryInfo formik={formik} />
        <FinalOrderModal
          isVisible={isVisibleModal}
          hideModal={hideModal}
          orderData={orderData}
        />
      </div>
    );
  })
);

export default CheckoutScreen;
