import MainScreen from "../screens/Main/MainScreen";
import WearScreen from "../screens/Wear/WearScreen";
import ProductScreen from "../screens/Product/ProductScreen";
import AccessoryScreen from "../screens/Accessory/AccessoryScreen";
import CartScreen from "../screens/Cart/CartScreen";
import CheckoutScreen from "../screens/Checkout/CheckoutScreen";
import ShippingScreen from "../screens/Shipping/ShippingScreen";
import ContactsScreen from "../screens/Contacts/ContactsScreen";
import BlogScreen from "../screens/Blog/BlogScreen";

const routes = [
  {
    path: "/",
    component: MainScreen,
    exact: true,
  },
  {
    path: "/wear",
    component: WearScreen,
  },
  {
    path: "/product/:name",
    component: ProductScreen,
  },
  {
    path: "/accessory",
    component: AccessoryScreen,
  },
  {
    path: "/cart",
    component: CartScreen,
  },
  {
    path: "/checkout",
    component: CheckoutScreen,
  },
  {
    path: "/shipping",
    component: ShippingScreen,
  },
  {
    path: "/contacts",
    component: ContactsScreen,
  },
  {
    path: "/blog",
    component: BlogScreen,
  },
];

export default routes;
