import React from "react";
import { useLocation, Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import * as reviewActions from '../../store/reviews';
import * as restaurantActions from '../../store/restaurants';


const Logo = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    
    const fetchWhenReturnToSplashPage = () => {
        dispatch(restaurantActions.fetchRestaurants());
        dispatch(reviewActions.fetchAllReviews());
    };



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
    };

    
    return (
        <div className="logoDiv" onClick={fetchWhenReturnToSplashPage}>{logoColor()}</div> 
    )

};

export default Logo;