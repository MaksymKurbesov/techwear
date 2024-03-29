import React, { useState } from "react";
import CartItemQuantityInput from "./CartItemQuantityInput/CartItemQuantityInput";
import styles from "./CartItem.module.css";

const CartItem = ({ product, removeItem, setQuantity }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handlesetQuantity = (evt) => {
    const value = evt.target.value;

    if (value <= product.rest) {
      setQuantity(product.id, value);
    }
  };

  const handleDeleteItem = () => {
    setIsDeleted(true);
    setTimeout(() => {
      removeItem(product.id);
    }, 500);
  };

  return (
    // если элемент удалён, произвести анимацию
    <tr className={isDeleted ? styles.deleted : ""}>
      <td>
        <img
          src={product.img}
          alt={product.model}
          title={product.model}
          width="100"
          height="100"
        />
      </td>
      <td>{product.brand}</td>
      <td>
        {product.model}
        <br />
        <span className={styles.size}>Размер {product.size}</span>
      </td>
      <td>{product.price}</td>
      <td>
        <CartItemQuantityInput
          quantity={product.quantity}
          setQuantity={handlesetQuantity}
        />
        <span className={styles.rest}>Доступно: {product.rest}</span>
      </td>
      <td>{`₴ ${product.price * product.quantity}`}</td>
      <td>
        <button className={styles.deleteItemButton} onClick={handleDeleteItem}>
          X
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
