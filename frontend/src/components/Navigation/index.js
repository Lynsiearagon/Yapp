import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import './Navigation.css';
import SessionNavigation from './_navigationUtils';

const Navigation = () => {
    const location = useLocation();

    return (
        <nav id="navBar">
            <Link to="/">
                {location.pathname === '/' ? 
                <img src={require("../../images/whiteYappLogo.png")} alt="Logo" className="logo"/> : 
                <img src={require("../../images/blackRedYappLogo.png")} alt="Logo" className="logo"/> }
            </Link>
            <div>[Placeholder for search bar]</div>
            <div>[Placeholder for my links]</div>
            <SessionNavigation />
        </nav>
    )
};

export default Navigation;