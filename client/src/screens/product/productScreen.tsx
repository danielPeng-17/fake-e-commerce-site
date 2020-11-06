import React, { Fragment, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../../actions/productActions';
import Loading from '../../components/loading/loading';

import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

import './productScreen.scss';
import '../../styles/_globalStyles.scss';

type TParams = {
    id: string;
}

interface RootState {
    productDetails: {
        product?: any,
        loading: boolean,
        error?: string
    } 
}

const useStyles = makeStyles({
    media: {
        maxWidth: 345,
        height: 400,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "2%",
    },
});

function Product({ history, match }: RouteComponentProps<TParams>) {
    const classes = useStyles();
    const [QTY, setQTY] = useState(1);


    const productDetails = useSelector((state: RootState) => state.productDetails);
    const { product, loading, error } = productDetails;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(match.params.id));
    }, [dispatch, match.params.id]);

    const qtyHandler = (i: string) => {
        if (i === "-"){
            QTY > 0 ? setQTY(QTY - 1) : setQTY(0);
        }else if (i === "+"){
            QTY < product.stock ? setQTY(QTY + 1) : setQTY(Number(product.stock));
        }
    }

    const addToCartHandler = () => {
        history.push("/cart/" + match.params.id + "?qty=" + QTY);
    }

    return (
        <Fragment>
            {
                loading ? 
                    <Loading></Loading>
                :
                    error ?
                        <div>error: { error }</div>
                    :
                        (
                        <div className="container">
                            <ul className="grid">
                                <li>
                                    <h1>{product.name}</h1>
                                    <h2>${product.price}</h2>
                                    <CardMedia
                                        className={classes.media}
                                        image={product.image}
                                        title={product.name}
                                    />
                                </li>
                                <li>
                                    <button className="button" onClick={() => qtyHandler("-")}>-</button>
                                    <input className="input-box" type="text" onChange={() => {return QTY}} value={QTY}></input>
                                    <button className="button" onClick={() => qtyHandler("+")}>+</button>
                                </li>

                                <li>
                                    <br></br>
                                    {
                                        product.stock > 0 && <button className="button" onClick={addToCartHandler}>Add to Cart</button>
                                    }
                                </li>
                            </ul>
                        </div>
                        )
            }
        </Fragment>
    );
}

export default Product;