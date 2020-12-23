import React from 'react';
import styles from './Characteristics.module.css';

const Characteristics = ({ characteristics }) => {
  const characteristicsItems = characteristics.map((item, i) => <li key={i}>{item}</li>)

  return (
    <div className={styles.characteristics}>
      <span>Характеристики</span>
      <ul className={styles.characteristics}>
        {characteristicsItems}
      </ul>
    </div>
  )
}

export default Characteristics;