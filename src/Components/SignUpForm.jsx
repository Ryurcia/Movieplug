import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import { useForm } from '../Util/useForm';
// imgs
import googleIcon from '../img/google-icon.png';
import fbIcon from '../img/facebook-icon.png';

// Styles
import { SignUpStyled, FormStyled } from '../Styled-Components/StyledForms'


export const SignUpForm = () => {
    // useForm Callback
    const {inputValues,inputErrors, handleChange, handleSubmit} = useForm(handleSignUp);


    function handleSignUp () {
        console.log("Signed Up");
        console.log(`Email: ${inputValues.email} Pass: ${inputValues.password}`);

        firebase.auth().createUserWithEmailAndPassword(inputValues.email, inputValues.password)
        .then((user) => {
            // Signed in 
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(`${errorCode}: ${errorMessage}`);
            
        })

    }


    return (
        <SignUpStyled>
            <h1>Get Started</h1>
            <div className="options">
                <button className='option-btn'><img src={googleIcon} alt="" width='40px' /></button>
                <button className='option-btn'><img src={fbIcon} alt="" width='40px' /></button>
            </div>

            {/* Form */}
            <FormStyled>
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input name="password" type="text" placeholder="Create Password" onChange={handleChange} required />
                <input name="confirmedPassword" type="text" placeholder="Confirm Password" onChange={handleChange} required />
            </FormStyled>

            <button className='logBtn' onClick={handleSubmit}>Sign Up</button>
            <Link className='link-item' to='/SignIn'>Already Signed Up? Sign In</Link>
        </SignUpStyled>
    )
}