import { observable, computed, action } from "mobx";

class Cart {
  @observable items = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed get hasCartItem() {
    return (id) => this.items.some((item) => item.id === id);
  }

  @computed get total() {
    let total = 0;
    this.items.forEach((item) => {
      const currentItem = this.rootStore.products.detailsById(item.id);
      total += currentItem.price * item.quantity;
    });
    return total;
  }

  @action clean = () => {
    this.items.length = 0;
  };

  @action addItem = (id, size) => {
    const newItem = {
      id,
      quantity: 1,
      size,
    };

    if (!this.hasCartItem(id)) {
      this.items.push(newItem);
    }
  };

  @action setQuantity = (id, value, minFlag) => {
    const index = this.items.findIndex((item) => item.id === id);
    if (!minFlag) {
      this.items[index].quantity = value;
    } else {
      this.items[index].quantity += value;
    }
  };

  @action removeItem = (id) => {
    const index = this.items.findIndex((item) => item.id === id);
    this.items.splice(index, 1);
  };
}

export default Cart;
