import { observable, computed, action } from 'mobx';

import { transferName } from '../utils/common';

class Products {
  @observable productsList = [...this.rootStore.mainAPI.products];
  @observable category = 'wear';
  @observable filter = '';

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed get detailsByName() {
    return (name) => {
      let neededProduct;

      const transferedName = transferName(name);

      this.productsList.forEach(product => {
        if (product.model.indexOf(transferedName) !== -1) {
          neededProduct = product;
        }
      })

      return neededProduct;
    }
  }

  @computed get detailsById() {
    return (id) => {
      let neededProduct;

      this.productsList.forEach(product => {
        if (product.id === id) {
          neededProduct = product;
        }
      })
      
      return neededProduct;
    }
  }

  @computed get getFilteredProducts() {
    return (category, filter) => {
      return [...this.productsList].filter(product => {
        if ((category === 'wear' && filter === 'wear')
        || (category === 'wear' && filter === '')) {
          return product.category === category;
        }

        return product.category === category && product.type === filter;
      })
    }
  }

  @computed get getAllProducts() {
    return [...this.productsList];
  }

  @action setCategory = (category) => {
    this.category = category;
  }

  @action setFilter = (filter) => {
    this.filter = filter;
  }
}

export default Products;