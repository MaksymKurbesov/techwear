import React from 'react';
import FilledCartHeaders from '../FilledCartHeaders/FilledCartHeaders';
import CartButtons from '../CartButtons/CartButtons';
import styles from './FilledCart.module.css';

const FilledCart = ({ children, total, clean }) => {
  return (
    <table className={styles.table}>
      <tbody>
        <FilledCartHeaders/>
        {children}
        <tr>
          <td colSpan="5"></td>
          <td className={styles.total}>Итого: ₴ {total}</td>
          <td></td>
        </tr>
        <CartButtons clean={() => clean()}/>
      </tbody>
    </table>
  )
}

export default FilledCart;