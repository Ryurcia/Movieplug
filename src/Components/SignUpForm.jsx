import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';
// imgs
import googleIcon from '../img/google-icon.png';
import fbIcon from '../img/facebook-icon.png';

// Styles
import { SignUpStyled, FormStyled } from '../Styled-Components/StyledForms'


export const SignUpForm = () => {
    return (
        <SignUpStyled>
            <h1>Get Started</h1>
            <div className="options">
                <button className='option-btn'><img src={googleIcon} alt="" width='50px' /></button>
                <button className='option-btn'><img src={fbIcon} alt="" width='50px' /></button>
            </div>

            {/* Form */}
            <FormStyled>
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Create Password" required />
                <input type="text" placeholder="Confirm Password" required />
            </FormStyled>

            <button className='logBtn'>Sign Up</button>
            <Link className='link-item' to='/SignIn'>Already Signed Up? Sign In</Link>
        </SignUpStyled>
    )
}