import React from "react";
import styles from "./Form.module.css";
import { observer, inject } from "mobx-react";

const Form = inject("stores")(
  observer(({ stores }) => {
    const { form } = stores;
    const validateFirstName = (value) => {
      if (value.length < 3 && value.length > 15) {
        // element.style.display = 'block';
      } else {
        // element.style.dispklay = 'none;
      }
    };

    return (
      <div className={styles.checkoutForm}>
        <form>
          <fieldset>
            <div>
              <label>Имя</label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => form.setFirstName(e.target.value)}
              />
              <span className={styles.validateFirstName}>
                Имя должно быть длинною 3-15 символов
              </span>
            </div>
            <div>
              <label>Фамилия</label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => form.setLastName(e.target.value)}
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label>Номер телефона</label>
              <input
                type="tel"
                value={form.phoneNumber}
                onChange={(e) => form.setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label>Почтовый адрес</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => form.setEmail(e.target.value)}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  })
);

export default Form;
