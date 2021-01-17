import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import routes from "../../utils/routes";
import styles from "./App.module.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main className={styles.main}>
        {routes.map((route) => {
          return (
            <Route
              key={route}
              path={route.path}
              component={route.component}
              exact
            />
          );
        })}
      </main>
      <Footer />
    </Router>
  );
};

export default App;
