import React from 'react';
import styles from './SizeBlock.module.css';

const SizeBlock = ({ setChoosedSize, choosedSize }) => {
  return (
    <div className={styles.size}>
      <span>Размер</span>
      <div className={styles.selectSize}>
        <input onChange={setChoosedSize} checked={choosedSize === "S"} id="size-s" type="radio" name="size" value="S"/>
        <label htmlFor="size-s" className={styles.sizeLabel}>S</label>
        <input onChange={setChoosedSize} checked={choosedSize === "M"} id="size-m" type="radio" name="size" value="M"/>
        <label htmlFor="size-m" className={styles.sizeLabel}>M</label>
        <input onChange={setChoosedSize} checked={choosedSize === "L"} id="size-l" type="radio" name="size" value="L"/>
        <label htmlFor="size-l" className={styles.sizeLabel}>L</label>
      </div>
      <span className={styles.chooseSize}>Выберите размер</span>
    </div>
  )
}

export default SizeBlock;