import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
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
                <button className='option-btn'><img src={googleIcon} alt="" width='30px' /></button>
                <button className='option-btn'><img src={fbIcon} alt="" width='30px' /></button>
            </div>

            {/* Form */}
            <FormStyled>
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Create Password" required />
                <input type="text" placeholder="Confirm Password" required />
            </FormStyled>

            <button className='signUpBtn'>Sign Up</button>
            <h3>Already Signed Up? Sign In</h3>
        </SignUpStyled>
    )
}