import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/nav/nav';
import HomeScreen from './screens/home/homeScreen';
import CartScreen from './screens/cart/cartScreen';
import ProductScreen from './screens/product/productScreen';
import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Route
          render={({ location }) => (
              <Nav location={location}>
              </Nav>
          )}
        />
        <Route exact={true} path="/" component={HomeScreen} />
        <Route path="/cart" component={CartScreen} />
        <Route path="/product/:id" component={ProductScreen} />
      </Router>     
    </Fragment>
  );
}

export default App;
