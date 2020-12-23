import React from 'react';
import styles from './FilledCartHeaders.module.css';

const FilledCartHeaders = () => {
  return (
    <tr>
      <th className={styles.photo}>Фото</th>
      <th className={styles.brand}>Бренд</th>
      <th className={styles.model}>Модель</th>
      <th className={styles.price}>Цена</th>
      <th className={styles.quantity}>Количество</th>
      <th className={styles.total}>Всего</th>
      <th className={styles.delete}></th>
    </tr>
  )
}

export default FilledCartHeaders;