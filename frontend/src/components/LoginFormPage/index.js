import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom';
import './LoginForm.css'


const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
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
        <>
            <ul >
                {errors.map(error => <li id="errorsLi" key={error}>{error}</li>)}
            </ul>
        <div id="formAndImageWrapper" >

            <div id="loginPageWrapper">
            <header>
                <h2>Log in to Yapp</h2>
                <span id="signUpDivTop">
                    <p>New to Yapp? <a href="#">Sign Up</a></p>
                </span>
                <span>
                    <p>By logging in, you agree to Yapp's <a href="">Terms of Service</a> and 
                    <a href=""> Privacy Policy</a></p>
                </span>
            </header>

            <form onSubmit={handleSubmit} id="loginForm">

                <label htmlFor="Email">
                    <input 
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </label>
                <label htmlFor="Password">
                    <input 
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
                <button id="submitFormButton" type="submit">Log In</button>
            </form>

            <p id="signUpLinkBottom">New to Yapp? <span><a href="#">Sign Up</a></span></p>
            </div>

            <div id="imageWrapper">
                <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt="Cartoon art of restaurant entry-way" />            
            </div>
        
        </div>
        </>
    )
};

export default LoginFormPage;