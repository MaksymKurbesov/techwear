import React, { useState } from "react";
import Form from "../../components/Form/Form";
import FinalOrderModal from "../../components/FinalOrderModal/FinalOrderModal";
import CheckoutProducts from "../../components/CheckoutProducts/CheckoutProducts";
import CheckoutDeliveryInfo from "../../components/CheckoutDeliveryInfo/CheckoutDeliveryInfo";
import CheckoutTotal from "../../components/CheckoutTotal/CheckoutTotal";
import { observer, inject } from "mobx-react";
import { Formik } from "formik";
import styles from "./CheckoutScreen.module.css";

const CheckoutScreen = inject("stores")(
  observer(({ stores }) => {
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [orderData, setOrderData] = useState({});

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

    return (
      <div className={styles.checkout}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            delivery: "",
          }}
          onSubmit={(values, actions) => {
            const savedData = {};
            for (const value in values) {
              savedData[value] = values[value];
            }
            setOrderData(savedData);
            showModal();
            stores.cart.clean();
            actions.resetForm();
          }}
        >
          {(formData) => {
            const { values, handleChange } = formData;
            return (
              <>
                <Form formData={formData} />
                <div className={styles.products}>
                  <CheckoutProducts
                    cartItems={stores.cart.items}
                    detailsById={stores.products.detailsById}
                  />
                  <CheckoutTotal
                    delivery={values.delivery}
                    cartTotal={stores.cart.total}
                  />
                </div>
                <CheckoutDeliveryInfo handleChange={handleChange} />
                <FinalOrderModal
                  isVisible={isVisibleModal}
                  hideModal={hideModal}
                  orderData={orderData}
                />
              </>
            );
          }}
        </Formik>
      </div>
    );
  })
);

export default CheckoutScreen;
