import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { History } from 'history';
import { savePaymentInfo } from '../../actions/cartActions';
import './paymentScreen.scss';

interface Props {
    history: History;
}

function PaymentScreen(props: Props) {
    const [error, setError] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const dispatch = useDispatch();
    
    const paymentHandler = (e: any) => {
        console.log(paymentMethod);
        if (paymentMethod !== '') {
            dispatch(savePaymentInfo(paymentMethod));
            props.history.push('/placeOrder');
        }else {
            setError('Invalid payment method.')
        }
    }

    return (
        <div className="container">
            <h1 className="heading">Payment Options</h1>
            <p>Select a payment method</p>
            {
                error ? <p className="error">{error}</p> : ''
            }
            
            <ul className="paymentOptions">
                <li>
                    
                    <label className="checkboxContainer">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="paypal"
                            className="paymentRadioSelect"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        Paypal
                        <span className="checkmark"></span>
                    </label>
                </li>
                <li>
                    
                    <label className="checkboxContainer">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="FakePal"
                            className="paymentRadioSelect"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        FakePal
                        <span className="checkmark"></span>
                    </label>
                </li>
            </ul>
            <button className="paymentBtn" type="submit" onClick={paymentHandler}>Next</button>
            
        </div>
    );
}

export default PaymentScreen;