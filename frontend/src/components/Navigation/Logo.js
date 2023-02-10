import React from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Logo = () => {
    const location = useLocation();

    const logoColor = () => {
        if (location.pathname === '/') {
            return (
                <Link to="/">
                    <img src={require("../../images/whiteYappLogo.png")} alt="Logo" className="logo"/>
                </Link>
            )
        } else {
            return (
                <Link to="/">
                    <img src={require("../../images/blackRedYappLogo.png")} alt="Logo" className="logo"/>
                </Link>
            )
        }
    }

    return (
         <div className="logoDiv">{logoColor()}</div> 
    )

}

export default Logo 