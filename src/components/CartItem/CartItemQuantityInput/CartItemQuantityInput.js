import React from 'react';
import styles from './CartItemQuantityInput.module.css';

const CartItemQuantityInput = ({ quantity, changeQuantity}) => {
  return (
    <input 
      className={styles.quantity}
      type="text" 
      value={quantity} 
      onChange={changeQuantity}
    />
  )
}

export default CartItemQuantityInput;