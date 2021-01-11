import React from "react";
import styles from "./Form.module.css";

const Form = ({ formik }) => {
  return (
    <div className={styles.checkoutForm}>
      <form onSubmit={formik.handleSubmit}>
        <fieldset>
          <div>
            <label>Имя</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div>
            <label>Фамилия</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>Номер телефона</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
          </div>
          <div>
            <label>Почтовый адрес</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>
        </fieldset>
        <div className={styles.submitOrder}>
          <button type="submit">Оформить заказ</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
