import React from "react";
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePhoneNumber,
} from "../../utils/validate";
import { Field } from "formik";
import styles from "./Form.module.css";

const Form = ({ formData }) => {
  return (
    <div className={styles.checkoutForm}>
      <form onSubmit={formData.handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="firstName">Имя</label>
            {formData.errors.firstName ? (
              <div className={styles.error}>{formData.errors.firstName}</div>
            ) : null}
            <Field
              id="firstName"
              name="firstName"
              type="text"
              onChange={formData.handleChange}
              value={formData.values.firstName}
              validate={validateFirstName}
              placeholder="Иван"
            />
          </div>
          <div>
            <label htmlFor="lastName">Фамилия</label>
            {formData.errors.lastName ? (
              <div className={styles.error}>{formData.errors.lastName}</div>
            ) : null}
            <Field
              id="lastName"
              name="lastName"
              type="text"
              onChange={formData.handleChange}
              value={formData.values.lastName}
              validate={validateLastName}
              placeholder="Иванович"
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="phoneNumber">Номер телефона</label>
            {formData.errors.phoneNumber ? (
              <div className={styles.error}>{formData.errors.phoneNumber}</div>
            ) : null}
            <Field
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              onChange={formData.handleChange}
              value={formData.values.phoneNumber}
              validate={validatePhoneNumber}
              placeholder="+380777777777"
            />
          </div>
          <div>
            <label htmlFor="email">Почтовый адрес</label>
            {formData.errors.email ? (
              <div className={styles.error}>{formData.errors.email}</div>
            ) : null}
            <Field
              id="email"
              name="email"
              type="email"
              onChange={formData.handleChange}
              value={formData.values.email}
              validate={validateEmail}
              placeholder="email@dot.com"
            />
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
