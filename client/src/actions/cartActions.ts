import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT } from '../constants/cartConstants';
import Cookie from 'js-cookie';

const addToCart = (id: string, QTY: number) => async (dispatch: any, getState: any) => {
    try{
        const {data} = await axios.get("/api/products/" + id);
        dispatch({
            type: CART_ADD_ITEM, 
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                stock: data.stock,
                QTY
            }
        });
        const {cart: {cartItems}} = getState();
        console.log(getState());
        Cookie.set('cartItems', JSON.stringify(cartItems));
    }
    catch(e) {

    }
}

const removeFromCart = (id: string) => async (dispatch: any, getState: any) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: id });
    const {cart: {cartItems}} = getState();
    Cookie.set('cartItems', JSON.stringify(cartItems));
}

const saveShippingInfo = (data: {address: string, city: string, postalCode: string, country: string}) => (dispatch: any, getState: any) => {
    dispatch({ type: CART_SAVE_SHIPPING, payload: data });
    const { cart: {shipping}} = getState();
    Cookie.set('shippingInfo', JSON.stringify(shipping));
}

const savePaymentInfo = (data: {}) => (dispatch: any) => {
    dispatch({ type: CART_SAVE_PAYMENT, payload: data });
}

export { addToCart, removeFromCart, saveShippingInfo, savePaymentInfo };