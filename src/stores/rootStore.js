import CartStore from "./cart";
import ProductsStore from "./products";
import mainAPI from "../utils/api";

class rootStore {
  constructor() {
    this.mainAPI = new mainAPI();

    this.products = new ProductsStore(this);
    this.cart = new CartStore(this);
  }
}

export default new rootStore();
