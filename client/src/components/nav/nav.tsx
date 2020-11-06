import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link, RouteProps } from 'react-router-dom';
import './nav.scss';

interface NavProps { 
    location?: RouteProps["location"];
    children: RouteProps["children"];
}

interface RootState {
    userSignin: {
        userInfo?: {
            name: string;
            email: string;
            isAdmin: boolean;
            token: string;
        }
    }
}
{

}
function Nav(props: NavProps) {
    const userSignin = useSelector((root: RootState) => root.userSignin);
    const { userInfo } = userSignin;

    const path = props.location!.pathname;

    console.log(props.location!.pathname);

    return (
        <Fragment>
            <div className="navbar" >
                {/* todo: add logo here => link to home page */}

                <ul className="nav-links" >
                    <Link className={"nav-link " + (path === "/" ? "fill" : "")} to="/" >Home</Link>
                    <Link className={"nav-link " + (path === "/cart" ? "fill" : "")} to="/cart" >Cart</Link>
                    {
                        userInfo ?
                            <Link className={"nav-link " + (path === "/profile" ? "fill" : "")} to="/profile">{userInfo.name}</Link>
                        :
                            <Link className={"nav-link " + (path === "/signin" ? "fill" : "")} to="/signin">Sign-in</Link>
                    }
                    
                </ul>
            </div>
            <div className="disclaimer" >
                <p>Disclaimer: This website is a coding project and is a <span className="important" >fake</span> e-commerce site.
                 All products displayed on this site are just for demo purposes only.</p>
            </div>
        </Fragment>
        
    );
}

export default Nav;