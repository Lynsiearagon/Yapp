import React from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const LogoutButton = () => {
    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logoutUser());
    }

    return (
        <div>
            <NavLink to="/seeyousoon"><button onClick={logout}>Log Out</button></NavLink> 
        </div>
    )

};

export default LogoutButton