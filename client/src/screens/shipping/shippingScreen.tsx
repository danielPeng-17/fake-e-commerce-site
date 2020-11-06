import React, { useEffect, useState } from 'react';
import { History } from 'history';
import Cookies, { set } from 'js-cookie';
import { saveShippingInfo } from '../../actions/cartActions';
import { useDispatch } from 'react-redux';
import './shippingScreen.scss';

interface Props { 
    history: History;
}

function ShippingScreen(props: Props) {
    const [error, setError] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (Cookies.get('shippingInfo') && address === '' && city === '' && postalCode === '' && country === '') {
            const shippingInfo = JSON.parse(Cookies.get('shippingInfo') || '');
            setAddress(shippingInfo.address);
            setCity(shippingInfo.city);
            setPostalCode(shippingInfo.postalCode);
            setCountry(shippingInfo.country);
        }
    }, [address, city, postalCode, country]);

    const submitHandler = () => {
        if (address !== '' && city !== '' && postalCode !== '' && country !== '') {
            dispatch(saveShippingInfo({address, city, postalCode, country}));
            props.history.push('/payment');
        }else {
            setError('Shipping information not filled out correctly. Please try again.');
        }
    }

    return (
        <div className="container">
            <h1 className="heading">Shipping</h1>
            <p>Enter shipping information below</p>
            <p>{ error ? <p className="error">{error}</p> : ''}</p>
            <input className="inputBox" placeholder="Address" defaultValue={address} onChange={(e) => setAddress(e.target.value)} />
            <input className="inputBox" placeholder="City" defaultValue={city} onChange={(e) => setCity(e.target.value)} />
            <input className="inputBox" placeholder="Postal Code" defaultValue={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
            <input className="inputBox" placeholder="Country" defaultValue={country} onChange={(e) => setCountry(e.target.value)} />
            <button className="submitBtn" type="submit" onClick={submitHandler}>Next</button>
        </div>
    );
}

export default ShippingScreen;