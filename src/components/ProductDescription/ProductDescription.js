import React from "react";
import CartButton from "../CartButton/CartButton";
import InfoBlock from "./InfoBlock/InfoBlock";
import SizeBlock from "./SizeBlock/SizeBlock";
import Characteristics from "./Characteristics/Characteristics";
import Description from "./Description/Description";
import styles from "./ProductDescription.module.css";

const ProductDescription = ({ product, setChoosedSize, choosedSize, cart }) => {
  return (
    <div className={styles.description}>
      <InfoBlock label={`Бренд`} value={product.brand} />
      <InfoBlock label={`Модель`} value={product.model} />
      <InfoBlock label={`Цвет`} value={product.color} />
      <InfoBlock label={`Цена`} value={`₴ ${product.price}`} />
      <SizeBlock setChoosedSize={setChoosedSize} choosedSize={choosedSize} />
      <CartButton id={product.id} choosedSize={choosedSize} cart={cart} />
      <Characteristics characteristics={product.characteristics} />
      <Description description={product.description} />
    </div>
  );
};

export default ProductDescription;
