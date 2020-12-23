import React from 'react';
import FilterList from '../../components/FilterList/FilterList';
import ProductsList from '../../components/ProductsList/ProductsList';
import { FILTERS } from '../../utils/const';
import { inject, observer } from 'mobx-react';
import styles from './WearScreen.module.css';

const WearScreen = inject('stores')(observer(({ stores }) => {
  const { products } = stores;
  
  const filteredProducts = products.getFilteredProducts(products.category, products.filter);

  const changeFilter = (filter) => {
    stores.products.setFilter(filter);
  }

  return (
    <div className={styles.wear}>
      <FilterList
        handleClick={changeFilter}
        filters={FILTERS}
      />
      <ProductsList 
        products={filteredProducts}
      />
    </div>
  );
}))

export default WearScreen;