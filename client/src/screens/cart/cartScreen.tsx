import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { addToCart } from '../../actions/cartActions';
import CartItemCard from '../../components/cartItemCard/cartItemCard';
import './cartScreen.scss';

type TParams = {
    id: string
}

interface RootState {
    cart: {
        cartItems?: any
    }
}

function CartScreen({ location, history, match }: RouteComponentProps<TParams>) {
    const cart = useSelector((state: RootState) => state.cart);
    const { cartItems } = cart;

    const productID = match.params.id;
    const QTY = location.search ? Number(location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    useEffect(() => {
        if (productID) {
            dispatch(addToCart(productID, QTY));
        }
    }, []);

    const checkOutHandler = () =>{
        history.push("/signin?redirect=shipping")
    }

    return (
        <div className="container">
            <h1 className="heading">Shopping Cart</h1>
            <div className="align-left">
                {
                    cartItems.length === 0 ? 
                        <div>
                            <h3>Cart is empty</h3>
                        </div>
                    : 
                    cartItems.map((item: any) => 
                        <div>
                            <CartItemCard item={item} ></CartItemCard>
                        </div>
                    )
                }
            </div>
            <div className="align-right">
                <h3>
                    Subtotal ( {cartItems.reduce((a: number, c: any) => a + Number(c.QTY), 0)} items)
                    :
                    ${cartItems.reduce((a: number, c: any) => a + Number(c.price) * Number(c.QTY), 0)}
                </h3>
                <button onClick={checkOutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}

export default CartScreen;