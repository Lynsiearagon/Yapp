import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom';
import './SignupForm.css'


const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [birthday, setBirthday] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]); 
        return dispatch(sessionActions.signUpUser({
            firstName,
            lastName,
            email,
            password,
            zipcode,
            birthday
        }))
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
    // return setErrors()

    return (

        <>
            <ul>
            {errors.map(error => <li id="errorsLi" key={error}>{error}</li>)}
            </ul>

            <div id="formAndImageWrapper" >

            <div id="loginPageWrapper">
            <header id="loginHeaderDiv">
                <h2 id="loginHeader">Sign Up for Yapp</h2>
                <span id="signUpDivTop">
                    <p>Connect with great local businesses</p>
                </span>
                <span>
                    <p id="termsAndConditions">By logging in, you agree to Yapp's 
                        <a href="#" className="externalLoginFormLinks"> Terms of Service</a> and 
                        <a href="#" 
                        className="externalLoginFormLinks"> Privacy Policy</a>.
                    </p>
                </span>
            </header>

            <div>
                <a href="https://www.linkedin.com/in/lynsie-aragon-87156a157/"
                    target="_blank">
                    <button
                        id ="linkedInButton"
                        className="loginFormButtons">
                            Follow Me on LinkedIn
                    </button>
                </a>
                <a href="https://github.com/Lynsiearagon"
                    target="_blank">
                    <button
                        id="githubButton"
                        className="loginFormButtons">
                            Follow Me on GitHib
                    </button>
                </a>

                <p>Don't worry, we never post without you permission</p>
            </div>

            <form onSubmit={handleSubmit} id="loginForm">

                <div id="nameDiv">
                    <label htmlFor="First Name">
                        <input 
                        type="text" 
                        placeholder="First Name"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        />
                    </label>
                    <label htmlFor="Last Name">
                        <input 
                        type="text" 
                        placeholder="Last Name"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        />
                    </label>
                </div>
                <label htmlFor="Email">
                    <input 
                    type="text"
                    placeholder='Email'
                    id="loginInputEmail"
                    className="loginInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </label>


                
                <label htmlFor="Password">
                    <input 
                    type="password"
                    placeholder="Password"
                    id="loginInputPassword"
                    className="loginInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
                <button 
                    id="submitFormButton" 
                    className="loginFormButtons" 
                    type="submit">Sign Up
                </button>
            </form>

            <p id="signUpLinkBottom">Already on Yapp? <span>
                <a href="/login" className="externalLoginFormLinks">Log in</a></span></p>
            </div>

            <div id="imageWrapper">
                <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" 
                    alt="Cartoon art of restaurant entry-way" />            
            </div>
        
        </div>
        </>
    )
    
}



export default SignupFormPage