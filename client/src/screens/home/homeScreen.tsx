import React, { useEffect } from 'react';
import { History, LocationState } from 'history';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/productCard/productCard';
import { listProducts } from '../../actions/productActions';
import Loading from '../../components/loading/loading';
import './homeScreen.scss';
import '../../styles/_globalStyles.scss';

interface HomeProps {
    history: History<LocationState>;
}

interface RootState {
    productsList: {
        products?: any[],
        loading: boolean,
        error?: string
    } 
}

function HomeScreen(props: HomeProps) {
    const productsList = useSelector((state: RootState) => state.productsList );
    const { products, loading, error } = productsList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        loading ? 
            <Loading></Loading>
        :
        error ? 
            <div>error: {error}</div>
        :
            (<div style={{textAlign: 'center'}} >
                <h1 className="heading">Shop</h1>
                <ul className="products" >
                    {
                        products ?
                            products.map((product) => {
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
            </div>)
    );
}

export default HomeScreen;