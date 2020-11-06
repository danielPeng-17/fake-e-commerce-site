import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { signin } from '../../actions/userActions';
import './signinScreen.scss';

interface RootState {
    userSignin: {
        loading?: boolean;
        userInfo?: any;
        error?: string;
    }
}

function SigninScreen({ location, history }: RouteComponentProps<any>) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userSignin = useSelector((state: RootState) => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();
    const redirect = location.search ? location.search.split("=")[1] : '/';
    
    useEffect(() => {
        // console.log(userInfo);
        console.log(userInfo);
        console.log('---------------');
        if (userInfo) {
            history.push(redirect);
        }
        
    });

    const signinHandler = (e: any) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return (
        <div className="container">
            <h1 className="heading">Sign-in</h1>
            {
                error ? 
                    <div>Error: {error === 'Request failed with status code 401' ? 'Incorrect Email or Password. Please try again.' : error}</div>
                : 
                    <div></div>
            }
            <input className="signinBox" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input className="signinBox" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button className="signinBtn" type="submit" onClick={(e) => signinHandler(e)} >Log In</button>

            <div className="wrapper">
                <p>Don't have an account?</p>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
}

export default SigninScreen;