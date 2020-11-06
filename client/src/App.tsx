import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/nav/nav';
import HomeScreen from './screens/home/homeScreen';
import CartScreen from './screens/cart/cartScreen';
import ProductScreen from './screens/product/productScreen';
import SigninScreen from './screens/signin/signinScreen';
import RegisterScreen from './screens/register/registerScreen';
import ShippingScreen from './screens/shipping/shippingScreen';
import PaymentScreen from './screens/payment/paymentScreen';
import PlaceOrderScreen from './screens/placeOrder/placeOrderScreen';
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
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeOrder" component={PlaceOrderScreen} />
      </Router>
    </Fragment>
  );
}

export default App;
