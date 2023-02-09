import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import React from "react";

const Navigation = () => {
    const sessionUser = useSelector(state => state.session.user)

    let sessionLinks; 

    if (!sessionUser) {
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
                <button><NavLink to="/">Yapp</NavLink></button>
                {sessionLinks}
            </ol>
        </>
    )

}


export default Navigation