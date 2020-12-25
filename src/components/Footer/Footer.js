import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.project}>
        <h3>ПРОЕКТ</h3>
        <ul>
          <li>
            <NavLink to="/wear">Одежда</NavLink>
          </li>
          <li>
            <NavLink to="/accessory">Аксессуары</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Блог</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Контакты</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.buyers}>
        <h3>ПОКУПАТЕЛЯМ</h3>
        <ul>
          <li>
            <NavLink to="/">Отследить заказ</NavLink>
          </li>
          <li>
            <NavLink to="/">Доставка и оплата</NavLink>
          </li>
          <li>
            <NavLink to="/">Обмен и возврат</NavLink>
          </li>
          <li>
            <NavLink to="/">Карта REACTION</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.contacts}>
        <div>
          <h3>ВРЕМЯ РАБОТЫ</h3>
          <span>10:00 — 22:00 ежедневно</span>
        </div>
        <div>
          <h3>ТЕЛЕФОНЫ</h3>
          <a href="tel:+380771703170">+380-77-170-31-70</a>
        </div>
      </div>
      <div className={styles.subscribe}>
        <h3>ПОДПИСЫВАЙТЕСЬ</h3>
        <p>
          Два раза в месяц мы присылаем письма с обзором новинок и свежими
          статьями из блога.
        </p>
        <input type="email" placeholder="Введите свой email" />
        <button>Получать свежие материалы</button>
      </div>
    </footer>
  );
};

export default Footer;
