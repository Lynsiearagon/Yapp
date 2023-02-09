import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import './Navigation.css';

const Navigation = () => {
    const location = useLocation();

    return (
        <Link>
            {location.pathname === '/' ? 
            <img src={require("../../images/whiteYappLogo.png")} alt="Logo" className="logo"/> : 
            <img src={require("../../images/blackRedYappLogo.png")} alt="Logo" className="logo"/> }
        </Link>
    )
};

export default Navigation;