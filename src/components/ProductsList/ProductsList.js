/* eslint-disable react/prop-types */
import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import styles from './ProductsList.module.css';

const ProductsList = ({ products }) => {
  return (
    <ul className={styles.productsList}>
      {products.map((product) => <ProductItem product={product} key={product.id}/>)}
    </ul>
  )
}


export default ProductsList;