import React, { Fragment } from 'react';
import { Link, RouteProps } from 'react-router-dom';
import './nav.scss';

interface NavProps { 
    location?: RouteProps["location"];
    children: RouteProps["children"];
}

function Nav(props: NavProps) {
    const path = props.location!.pathname;

    console.log(props.location!.pathname);

    return (
        <Fragment>
            <div className="navbar" >
                {/* todo: add logo here => link to home page */}

                <ul className="nav-links" >
                    <Link className={"nav-link " + (path === "/" ? "fill" : "")} to="/" >Home</Link>
                    <Link className={"nav-link " + (path === "/cart" ? "fill" : "")} to="/cart" >Cart</Link>
                    <Link className={"nav-link " + (path === "/signin" ? "fill" : "")} to="/signin">Sign-in</Link>
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