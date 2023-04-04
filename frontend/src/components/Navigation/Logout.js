import React from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const LogoutButton = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = async (e) => {
        e.preventDefault();
        await dispatch(sessionActions.logoutUser());
        history.push("/seeyousoon");
    }

    return (
        <div>
            <button type="submit" onClick={logout}>Log Out</button>
        </div>
    )

};

export default LogoutButton