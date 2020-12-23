import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainScreen from '../../screens/Main/MainScreen'
import WearScreen from '../../screens/Wear/WearScreen'
import ProductScreen from '../../screens/Product/ProductScreen';
import AccessoryScreen from '../../screens/Accessory/AccessoryScreen';
import CartScreen from '../../screens/Cart/CartScreen';
import CheckoutScreen from '../../screens/Checkout/CheckoutScreen';
import styles from './App.module.css';


const App = () => {
  return (
    <Router>
      <Header/>
      <main className={styles.main}>
        <Route exact path="/" component={MainScreen}/>
        <Route path="/wear" component={WearScreen}/> 
        <Route exact path="/product/:name" component={ProductScreen}/>
        <Route exact path="/accessory" component={AccessoryScreen}/> 
        <Route exact path="/cart" component={CartScreen}/>
        <Route exact path="/checkout" component={CheckoutScreen}/>
      </main> 
      <Footer/>
    </Router>
  )
}

export default App;