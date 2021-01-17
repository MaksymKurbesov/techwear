import React from "react";
import styles from "./ContactsScreen.module.css";
const ContactsScreen = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.phones}>
        <h3>Телефоны</h3>
        <p>
          Основной номер: <a href="tel:+380-77-170-31-70">+380-77-170-31-70</a>
        </p>
      </div>
      <div className={styles.workingTime}>
        <h3>Время работы</h3>
        <div>
          <p>
            Обработка заказов: <span>10:00 — 22:00 по Киеву, ежедневно </span>
          </p>
          <p>
            Доставка заказов:
            <span> 10:00 — 22:00 по местному времени, ежедневно </span>
          </p>
        </div>
      </div>
      <div className={styles.email}>
        <h3>E-mail</h3>
        <p>
          Вопросы по заказам:
          <a href="mailto:support@techwear.store"> support@techwear.store</a>
          <br />
          По остальным вопросам:{" "}
          <a href="mailto:team@techwear.store"> team@techwear.store</a>
        </p>
      </div>
      <div className={styles.accounts}>
        <h3>Официальные аккаунты</h3>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram </a>
          </li>
          <li>
            <a href="#">Вконтакте </a>
          </li>
          <li>
            <a href="#">Telegram </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactsScreen;
