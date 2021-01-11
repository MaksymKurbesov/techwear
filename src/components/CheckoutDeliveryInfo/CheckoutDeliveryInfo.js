import React from "react";
import styles from "./CheckoutDeliveryInfo.module.css";

const CheckoutDeliveryInfo = ({ formik }) => {
  return (
    <div className={styles.delivery}>
      <input
        onChange={formik.handleChange}
        id="kyiv"
        type="radio"
        name="delivery"
        value="50"
      />
      <label htmlFor="kyiv">
        <p className={styles.deliveryText}>
          В Киеве и Киевской области действует экспресс-доставка до двери.
          Курьерская служба привезет заказ в согласованную дату и удобное для
          Вас время.
          <span className={styles.deliveryPrice}>₴ 50.00</span>
        </p>
      </label>
      <input
        onChange={formik.handleChange}
        id="ukraine"
        type="radio"
        name="delivery"
        value="100"
      />
      <label htmlFor="ukraine">
        <p className={styles.deliveryText}>
          Во все города Украины действует курьерская доставка транспортной
          компанией Новая Пошта. Срок доставки зависит от Вашего местоположения
          и составляет от 2 до 15 рабочих дней.
          <span className={styles.deliveryPrice}>₴ 100.00</span>
        </p>
      </label>
      <input
        onChange={formik.handleChange}
        id="world"
        type="radio"
        name="delivery"
        value="700"
      />
      <label htmlFor="world">
        <p className={styles.deliveryText}>
          Международные заказы доставляются транспортными компаниями EMS, UPS и
          Fedex. Срок доставки зависит от Вашего местоположения и составляет от
          6 до 15 рабочих дней.
          <span className={styles.deliveryPrice}>₴ 700.00</span>
        </p>
      </label>
    </div>
  );
};

export default CheckoutDeliveryInfo;
