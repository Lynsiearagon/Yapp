import React from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';


const LogoutButton = () => {
    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logoutUser());
        return <Redirect to="/seeyousoon" />
    }

    return (
        <div>
            <button type="submit" onClick={logout}>Log Out</button>
        </div>
    )

};

export default LogoutButton