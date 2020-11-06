import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { ProductDetailsReducer, ProductListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { UserRegisterReducer, UserSigninReducer } from './reducers/userReducers';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// get initial state from cookies
const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
  cart: { 
    cartItems, 
    shipping: {},
    payment: {} 
  },
  userSignin: { userInfo }
};

const reducer = combineReducers({
    productsList: ProductListReducer,
    productDetails: ProductDetailsReducer,
    cart: cartReducer,
    userSignin: UserSigninReducer,
    userRegister: UserRegisterReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState as any, composeEnhancer(applyMiddleware(thunk)));

export { store };