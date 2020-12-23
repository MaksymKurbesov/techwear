import React from 'react';
import { urlBuilder } from '../../../utils/common';
import { NavLink } from 'react-router-dom';
import styles from './ProductItem.module.css';

const ProductItem = ({ product }) => {
  return (
    <li className={styles.productsItem} key={product.id}>
      <NavLink to={`/product/${urlBuilder(product.model)}`}>
        <img src={product.img} alt="Фото товара" width="300"/>
      </NavLink>
      <p>{product.model}</p>
      <p>{product.brand}</p>
      <p>₴ {product.price}</p>
    </li>
  )
}

export default ProductItem;