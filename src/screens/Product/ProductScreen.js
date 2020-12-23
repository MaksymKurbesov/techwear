import React, { useState } from "react";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import { observer, inject } from "mobx-react";
import styles from "./ProductScreen.module.css";

const ProductScreen = inject("stores")(
  observer(({ stores, match }) => {
    const [choosedSize, setChoosedSize] = useState();

    const { name } = match.params;
    const product = stores.products.detailsByName(name);

    const handleChange = (evt) => {
      setChoosedSize(evt.target.value);
    };

    return (
      <div className={styles.productPage}>
        <div className={styles.images}>
          <img src={product.img} width="500" height="500" />
        </div>
        <ProductDescription
          product={product}
          setChoosedSize={handleChange}
          choosedSize={choosedSize}
        />
      </div>
    );
  })
);

export default ProductScreen;
