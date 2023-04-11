import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router-dom';
import linkedin from '../../images/icons8-linkedin-32.png';
import github from '../../images/icons8-github-24.png';
import wellfound from '../../images/wellfound-symbol-black.png'
import './LoginForm.css'


const LoginFormPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

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

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    const demoUserLogin = (e) => {
        e.preventDefault();
        dispatch(sessionActions.login({
            email: 'demo@user.io', 
            password: 'password'
        }))
        scrollToTop();
    };



    if (sessionUser) {
        return history.push('/')
    } else {
        return (
            <>
                <ul >
                    {errors.map(error => <li id="errorsLi" key={error}>{error}</li>)}
                </ul>
            <div id="formAndImageWrapper" >
    
                <div id="loginPageWrapper">
                <header id="loginHeaderDiv">
                    <h2 id="loginHeader">Log in to Yapp</h2>
                    <span id="signUpDivTop">
                        <p>New to Yapp? 
                            <a href="/signup" 
                                className="externalLoginFormLinks"> Sign Up</a>
                        </p>
                    </span>
                    <span>
                        <p id="termsAndConditions">By logging in, you agree to Yapp's 
                            <a href="https://terms.yelp.com/tos/en_us/20200101_en_us/" className="externalLoginFormLinks"> Terms of Service</a> and 
                            <a href="https://terms.yelp.com/privacy/en_us/20220831_en_us/" 
                            className="externalLoginFormLinks"> Privacy Policy</a>.
                        </p>
                    </span>
                </header>
    
                <div>
                    <a href="https://www.linkedin.com/in/lynsie-aragon-87156a157/"
                        target="_blank" rel="noreferrer">
                        <button
                            id ="linkedInButton"
                            className="loginFormButtons">
                                <img src={linkedin} alt="LinkedIn logo" id="linkedinLogo"/>
                                <p>Follow Me on LinkedIn</p>
                        </button>
                    </a>
                    <a href="https://angel.co/u/lynsie-aragon"
                        target="_blank" rel="noreferrer">
                        <button
                            id ="wellFoundButton"
                            className="loginFormButtons">
                                <img src={wellfound} alt="Wellfound logo" id="wellfoundLogo"/>
                                <p>Follow Me on Wellfound</p>
                        </button>
                    </a>
                    <a href="https://github.com/Lynsiearagon"
                        target="_blank" rel="noreferrer">
                        <button
                            id="githubButton"
                            className="loginFormButtons">
                                <img src={github} alt="Github Logo" id="githubLogo" />
                                <p>Follow Me on GitHub</p>
                        </button>
                    </a>
    
                </div>
    
                <form onSubmit={handleSubmit} id="loginForm">
    
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
                        type="submit">Log In
                    </button>
    
                    <p id="altLoginMessage">No account?</p>
    
                    <button 
                        id="demoUserSubmitFormButton" 
                        className="loginFormButtons" 
                        onClick={demoUserLogin}
                        type="submit">Log In as Demo User
                    </button>
                </form>
    
                <p id="signUpLinkBottom">New to Yapp? <span>
                    <a href="/signup" className="externalLoginFormLinks">Sign Up</a></span></p>
                </div>
    
                <div id="imageWrapper">
                    <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" 
                        alt="Cartoon art of restaurant entry-way" />            
                </div>
            
            </div>
            </>
        )
    }
    
    
};

export default LoginFormPage;