/* eslint-disable react/prop-types */
import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import EmptyProducts from "./EmptyProducts/EmptyProducts";
import styles from "./ProductsList.module.css";

const ProductsList = ({ products }) => {
  if (products.length === 0) {
    return <EmptyProducts />;
  }

  return (
    <ul className={styles.productsList}>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
};

export default ProductsList;
