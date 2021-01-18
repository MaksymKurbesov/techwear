import React from "react";
import ProductsList from "../../components/ProductsList/ProductsList";
import { observer, inject } from "mobx-react";
import styles from "./AccessoryScreen.module.css";

const AccessoryScreen = inject("stores")(
  observer(({ stores }) => {
    const { products } = stores;

    const filteredProducts = products.getFilteredProducts(
      "accessory",
      "accessory"
    );

    return (
      <div className={styles.accessory}>
        <ProductsList products={filteredProducts} />
      </div>
    );
  })
);

export default AccessoryScreen;
