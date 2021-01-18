import React, { useState } from "react";
import FilterList from "../../components/FilterList/FilterList";
import MinimizeFilterList from "../../components/MinimizeFilterList/MinimizeFilterList";
import ProductsList from "../../components/ProductsList/ProductsList";
import { FILTERS } from "../../utils/const";
import { inject, observer } from "mobx-react";
import styles from "./WearScreen.module.css";

const WearScreen = inject("stores")(
  observer(({ stores }) => {
    const { products } = stores;
    const [isVisibleFilter, setIsVisibleFilter] = useState(true);

    const filteredProducts = products.getFilteredProducts(
      "wear",
      products.filter
    );

    const changeFilter = (filter) => {
      stores.products.setFilter(filter);
    };

    return (
      <div className={styles.wear}>
        <FilterList
          handleClick={changeFilter}
          filters={FILTERS}
          isVisibleFilter={isVisibleFilter}
          setIsVisibleFilter={setIsVisibleFilter}
        />
        <MinimizeFilterList setIsVisibleFilter={setIsVisibleFilter} />
        <ProductsList products={filteredProducts} />
      </div>
    );
  })
);

export default WearScreen;
