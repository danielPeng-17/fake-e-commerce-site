import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT } from "../constants/cartConstants";

interface action {
    type: string;
    payload?: any
}

function cartReducer (state = { cartItems: [] }, action: action){
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            // check if the payload is already in the cart
            const product: any = state.cartItems.find((elem: any) => elem.product === item.product);

            // if item is in the cart, update the cart
            if (product){
                return { cartItems: state.cartItems.map((elem: any) => elem.product === product.product ? item : elem) };
            }
            // if item is not in the cart, add it to the cart
            return { cartItems: [...state.cartItems, item] };
        case CART_REMOVE_ITEM:
            return { cartItems: state.cartItems.filter((elem: any) => elem.product !== action.payload) };
        case CART_SAVE_SHIPPING:
            return { ...state, shipping: action.payload };
        case CART_SAVE_PAYMENT:
            return { ...state, payment: action.payload };
        default:
            return state;
    }
}

export { cartReducer };