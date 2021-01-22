import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import routes from "../../utils/routes";
import styles from "./App.module.css";
import { inject, observer } from "mobx-react";

const App = inject("stores")(
  observer(({ stores }) => {
    return (
      <Router>
        <Header cartItemsCount={stores.cart.items.length} />
        <main className={styles.main}>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            );
          })}
        </main>
        <Footer />
      </Router>
    );
  })
);

export default App;
