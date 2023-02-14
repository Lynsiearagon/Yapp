import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom';
import './SignupForm.css'
import { range, days, months } from './_signupUtils.js'

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [birthday, setBirthday] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [errors, setErrors] = useState([]);
    const years = range(1901, 2023, 1);
    

    if (sessionUser) return <Redirect to="/" />;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]); 

        birthday = setBirthday(`${month} ${day} ${year}`);

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
            return setErrors([]);
    };

        const demoUserLogin = (e) => {
        e.preventDefault();
        dispatch(sessionActions.login({
            email: 'demo@user.io', 
            password: 'password'}))
    };
    

    return (

        <>
            <ul>
                {errors.map(error => <li id="errorsLi" key={error.id}>{error}</li>)}
            </ul>

            <div id="formAndImageWrapperSignUp" >

            <div id="signupPageWrapper">
            <header id="signupHeaderDiv">
                <h2 id="signupHeader">Sign Up for Yapp</h2>
                <span id="signUpDivTop">
                    <p>Connect with great local businesses</p>
                </span>
                <span>
                    <p id="termsAndConditions">By continuing, you agree to Yapp's 
                        <a href="#" className="externalsignupFormLinks"> Terms of Service</a> and 
                        aknowledge Yapp's
                        <a href="#" 
                        className="externalsignupFormLinks"> Privacy Policy</a>.
                    </p>
                </span>
            </header>

            <div>
                <a href="https://www.linkedin.com/in/lynsie-aragon-87156a157/"
                    target="_blank" rel="noreferrer">
                    <button
                        id ="linkedInButton"
                        className="signupFormButtons">
                            Follow Me on LinkedIn
                    </button>
                </a>
                <a href="https://github.com/Lynsiearagon"
                    target="_blank" rel="noreferrer">
                    <button
                        id="githubButton"
                        className="signupFormButtons">
                            Follow Me on GitHub
                    </button>
                </a>

                <p id="reassuranceStatement">Want to sign in quickly? Try signing in as Demo User!</p>
            </div>

            <form onSubmit={handleSubmit} id="signupForm">

                <div id="nameDiv">
                    <label htmlFor="firstName">
                        <input 
                        type="text" 
                        placeholder="First Name"
                        id="firstName"
                        className="signupInput"
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
                        className="signupInput"
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
                    id="signupInputEmail"
                    className="signupInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </label>
                <label htmlFor="Password">
                    <input 
                    type="password"
                    placeholder="Password"
                    id="signupInputPassword"
                    className="signupInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
                <label htmlFor="Zipcode">
                    <input 
                    type="text"
                    placeholder='ZIP Code'
                    id="signupInputZipcode"
                    className="signupInput"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    required
                    />
                </label>
                <label 
                    htmlFor="Birthday" 
                    id="birthdayLabel">Birthday 
                    <span id="optional"> Optional</span>
                <br />
                    <select 
                        name="month" 
                        id="monthSelector" 
                        className="birthdaySelector"
                        onChange={(e) => setMonth(e.target.value)}>
                        {
                            months.map((month) => {
                                return <option value={month} key={month.id}>{month}</option>
                            })
                        }
                    </select>
                    <select 
                        name="day" 
                        id="daySelector" 
                        className="birthdaySelector"
                        onChange={(e) => setDay(e.target.value)}>
                        {
                            days.map((day) => {
                                return <option value={day} key={day.id}>{day}</option>
                            })
                        }
                    </select>
                    <select 
                        name="year" 
                        id="yearSelector" 
                        className="birthdaySelector"
                        onChange={(e) => setYear(e.target.value)}>
                        {
                            years.map((year) => {
                                return <option value={year} key={year.id}>{year}</option>
                            })
                        }
                    </select>
                </label>
                <button 
                    id="submitFormButton" 
                    className="signupFormButtons" 
                    type="submit">Sign Up
                </button>

                <p id="signUpLinkBottom">Already on Yapp? <span>
                <a href="/login" className="externalsignupFormLinks">Log in</a></span> or </p>

                <button 
                    id="demoUserSubmitFormButton" 
                    className="signupFormButtons" 
                    onClick={demoUserLogin}
                    type="submit">Sign In as Demo User
                </button>
            </form>

            
            </div>

            <div id="imageWrapper">
                <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" 
                    alt="Cartoon art of restaurant entry-way" 
                    id="signupImage"/>            
            </div>
        
        </div>
        </>
    )
    
}



export default SignupFormPage