import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.checkoutForm}>
      <form>
        <fieldset>
          <div>
            <label>Имя</label>
            <input type="text" />
          </div>
          <div>
            <label>Фамилия</label>
            <input type="text" />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>Номер телефона</label>
            <input type="tel" />
          </div>
          <div>
            <label>Почтовый адрес</label>
            <input type="email" />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
