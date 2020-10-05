import React from 'react';
// import { Link } from 'react-router-dom';
import { History, LocationState } from 'history';
import ProductCard from '../../components/productCard/productCard';

import { data } from '../../data';
import './homeScreen.scss';

interface HomeProps {
    history: History<LocationState>;
}

function HomeScreen(props: HomeProps) {
    return (
        <div style={{textAlign: 'center'}} >
            <h1>Shop</h1>
            <ul className="products" >
                {
                    data.products.length !== 0 ?
                        data.products.map((product, index) => {
                            return (
                                <li key={product._id}>
                                    <ProductCard product={product} history={props.history} ></ProductCard>
                                </li>  
                            );
                        })
                    :
                        <div></div>
                }
            </ul>
        </div>
    );
}

export default HomeScreen;