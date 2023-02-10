import { useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom"
import React from "react";

const SessionNavigation = () => {
    const sessionUser = useSelector(state => state.session.user)
    const location = useLocation();

    let sessionLinks; 

    if ((!sessionUser && location.pathname !== '/login') && (!sessionUser && location.pathname !== '/signup')) {
        sessionLinks = (
            <>
                <NavLink to="/login"><button id="logInHPButton">Log In</button></NavLink>
                <NavLink to="/signup"><button id="signUpHPButton">Sign Up</button></NavLink>
            </>
        )
    }

    return (
        <div id="startSessionLinks">
            {sessionLinks}
        </div>
    )

}

export default SessionNavigation