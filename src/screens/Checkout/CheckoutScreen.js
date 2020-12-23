import React, { useState } from 'react';
import CheckoutProductsItem from '../../components/CheckoutProductsItem/CheckoutProductsItem';
import CheckoutDeliveryInfo from '../../components/CheckoutDeliveryInfo/CheckoutDeliveryInfo';
import { NavLink } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import styles from './CheckoutScreen.module.css';

const CheckoutScreen = inject('stores')(observer(({ stores }) => {
  const [delivery, setDelivery] = useState('')
  const checkoutElements = stores.cart.items.map(item => {
    const product = stores.products.detailsById(item.id);

    return (
      <CheckoutProductsItem product={product} key={item.id} quantity={item.quantity}/>
    )
  })

  return (
    <div className={styles.checkout}>
      <div className={styles.products}>
        <ul>
         {checkoutElements}
        </ul>
        <div className={styles.total}>
          <p>Доставка: <span>{delivery === '' ? `Выберите способ доставки` : `₴ ${delivery}.00`}</span></p>
          <p>Итого: <span>₴ {stores.cart.total + +delivery}.00</span></p>
        </div>
      </div>
      <CheckoutDeliveryInfo setDelivery={setDelivery}/>
      <div className={styles.toFormButton}>
        <NavLink to="form">Далее</NavLink>
      </div>
    </div>
  )
}))

export default CheckoutScreen;