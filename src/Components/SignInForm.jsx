import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';
// imgs
import googleIcon from '../img/google-icon.png';
import fbIcon from '../img/facebook-icon.png';

// Styles
import { SignUpStyled, FormStyled } from '../Styled-Components/StyledForms'


export const SignInForm = () => {
    return (
        <SignUpStyled>
            <h1>Welcome Back</h1>
            <div className="options">
                <button className='option-btn'><img src={googleIcon} alt="" width='50px' /></button>
                <button className='option-btn'><img src={fbIcon} alt="" width='50px' /></button>
            </div>

            {/* Form */}
            <FormStyled>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
            </FormStyled>

            <button className='logBtn'>Sign In</button>
            <Link className='link-item' to='/'>New User? Sign Up</Link>
        </SignUpStyled>
    )
}