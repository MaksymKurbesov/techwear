import React from 'react';
import styles from './InfoBlock.module.css';

const InfoBlock = ({ label, value }) => {
  return (
    <div className={styles.info}>
      <span>{label}</span>
      <p>{value}</p>
    </div>
  )
}

export default InfoBlock;