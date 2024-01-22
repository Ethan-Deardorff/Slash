import './sign-in-form.css';
import '../class.css';
import PrimaryBtn from '../Primary Button/primary-btn';

import React, { useState } from 'react';

function SignInForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [termsActive, setTermsActive] = useState(false);
    const [ariaHidden, setAriaHidden] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const openTerms = (event) => {
        setTermsActive(true);
        setAriaHidden(false);
    };
    
    const acceptTerms = (event) => {
        event.preventDefault()

        setTermsActive(false);
        setAriaHidden(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormSubmitted(true);

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        console.log('Creating account with:', { username, password });
    };

    return (
        <>
            {!formSubmitted && (
                <>
                    <div className='container'>
                        <img src='/assets/sign-in-graphic.webp'></img>
                    </div>
                    <form className="blur-bg" id='sign-in-form' onSubmit={handleSubmit}>
                        <h1>Sign In</h1>
                        <div className='column sm-gap'>
                            <label htmlFor="username">Username<span className='caption'>Required</span></label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                        </div>
                        <div className='column sm-gap'>
                            <label htmlFor="password">Password<span className='caption'>Required</span></label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <div className='align sm-gap'>
                            <input
                                type="checkbox"
                                id="terms-check"
                                onChange={openTerms}
                                required
                            />
                            <label htmlFor="terms-check">Accept Terms<span className='caption'>Required</span></label>
                            <div className={`column sm-gap ${termsActive ? 'active' : ''}`} id='terms'>
                                <h2>Terms of Service</h2>
                                <p>
                                    The account created by a user is stored locally and is subject to data leaks. DO NOT ENTER PERSONAL INFORMATION. It is advised to make a temporary account or one with information that is not used anywhere else.
                                    <br></br>
                                    <br></br>
                                    By clicking accept, you are admitting to have read these terms and are aware of the consequences.
                                </p>
                                <PrimaryBtn onClick={acceptTerms} text='Accept Terms' ariaHidden={ariaHidden.toString()}></PrimaryBtn>
                            </div>
                        </div>
                        <div className='buttons'>
                            <PrimaryBtn type="submit" text='Log In'></PrimaryBtn>
                            <PrimaryBtn type="submit" text='Create Account'></PrimaryBtn>
                        </div>
                    </form>
                </>
            )}
        </>
    );
}

export default SignInForm;
