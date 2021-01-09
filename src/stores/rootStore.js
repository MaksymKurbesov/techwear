import CartStore from "./cart";
import ProductsStore from "./products";
import FormStore from "./form";

import mainAPI from "../utils/api";

class rootStore {
  constructor() {
    this.mainAPI = new mainAPI();

    this.products = new ProductsStore(this);
    this.cart = new CartStore(this);
    this.form = new FormStore(this);
  }
}

export default new rootStore();
