import { useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom"
import React from "react";

const SessionNavigation = () => {
    const sessionUser = useSelector(state => state.session.user)
    const location = useLocation();

    let sessionLinks; 

    if (!sessionUser && location.pathname === '/') {
        sessionLinks = (
            <>
                <NavLink to="/login"><button>Log In</button></NavLink>
                <NavLink to="/signup"><button>Sign Up</button></NavLink>
            </>
        )
    }

    return (
        <>
            <ol>
                {sessionLinks}
            </ol>
        </>
    )

}


export default SessionNavigation