import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react';
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom';
import { getSessionUser } from '../../store/session';



const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(getSessionUser());
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to='/' />

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({email, password}))
            .catch(async (res) => {
                let data; 
                try {
                data = await res.clone().json();
                } catch {
                    data = await res.text(); 
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]); 
                else setErrors([res.statusText]);
                
            });
    }
    

    return (
        <form>
            <label>Email
                <input type="text"/>
            </label>
            <label>Password
                <input type="password"/>
            </label>
        </form>
    )
};


export default LoginFormPage