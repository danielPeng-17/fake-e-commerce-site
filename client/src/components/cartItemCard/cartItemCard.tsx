import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import './cartItemCard.scss';

interface CartItemCardProps {
    item: {
        // product is _id
        product: string,
        name: string,
        image: string,
        price: number,
        stock: number,
        QTY: number
    }
}



function CartItemCard(props: CartItemCardProps) {
    const dispatch = useDispatch();

    const removeFromCartHandler = (productID: string) => {
        dispatch(removeFromCart(productID));
    }

    return (
        <div className="long-container">
            <div>
                <img className="product-image" src={props.item.image} alt='product' />
            </div>
            <div className="product-name">
                <Link to={'/product/' + props.item.product}>{props.item.name}</Link>
            </div>
            <div className="info">
                <div className="qty">
                    QTY:&nbsp;&nbsp;
                    <select value={props.item.QTY} onChange={(e) => dispatch(addToCart(props.item.product, Number(e.target.value)))}>
                        {
                            [...Array(props.item.stock).keys()].map(x =>
                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                            )                                                
                        }
                    </select>
                    <span style={{margin: "30px"}}>
                        <button type="button" className='button' onClick={() => removeFromCartHandler(props.item.product)}>Delete</button>
                    </span>
                </div>
                
                
            </div>
        </div>
    );
}

export default CartItemCard;
