import React from "react";
import { useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom"
import ProfileDropdown from './ProfileDropdown';

const SessionNavigation = () => {
    const sessionUser = useSelector(state => state.session.user)
    const location = useLocation();

    let sessionLinks; 
    let color; 

    if (location.pathname === '/') {
        color = "white"
    } else {
        color = "black"
    };


    if ((!sessionUser && location.pathname !== '/login') && (!sessionUser && location.pathname !== '/signup')) {
        sessionLinks = (
            <>
                <NavLink to="/login">
                    <button id="logInHPButton" style={{color: color, borderColor: color}}>Log In</button>
                </NavLink>
                <NavLink to="/signup">
                    <button id="signUpHPButton">Sign Up</button>
                </NavLink>
            </>
        )
    } else if (sessionUser) {
        sessionLinks = (
            <NavLink to="/seeyousoon"> <ProfileDropdown /> </NavLink> 
        )
    };

    return (
        <div id="startSessionLinks">
            {sessionLinks}
        </div>
    )

}

export default SessionNavigation