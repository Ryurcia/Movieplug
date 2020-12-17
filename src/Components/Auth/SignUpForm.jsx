import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link, useHistory } from 'react-router-dom';
// Utils
import { useForm } from '../../Util/useForm';
import { googleSignUp, provider } from '../../Util/GoogleAuth';
// imgs
import googleIcon from '../../img/google-icon.png';
// Styles
import { SignUpStyled, FormStyled } from '../../Styled-Components/StyledForms'


export const SignUpForm = () => {
    // useForm
    const { inputValues, inputErrors, handleChange, handleSubmit } = useForm(handleSignUp);

    //Valid States will determine whether or not to trigger error messages from useForm
    const [isValid, setIsValid] = useState({
        email: true,
        password: true,
    })

    let history = useHistory();

    // Handlers
    function handleSignUp() {

        console.log(`Email: ${inputValues.email} Pass: ${inputValues.password}`);

        firebase.auth().createUserWithEmailAndPassword(inputValues.email, inputValues.password)
            .then((user) => {
                // Signed in 
                console.log("Signed Up");
                setIsValid({
                    ...isValid,
                    email: true,
                    password: true
                })

                // Local Storage keeps user logged in
                localStorage.setItem('loggedIn', true);
                history.replace('/home');

            })
            .catch((error) => {
                let errorCode = error.code
                let errorMessage = error.message

                console.log(`${errorCode}: ${errorMessage}`);

                localStorage.setItem('loggedIn', false);

                if (errorCode === 'auth/invalid-email' || errorCode === 'auth/email-already-in-use') {
                    console.log("invalid email");
                    setIsValid({
                        ...isValid,
                        email: false
                    })
                } else if (errorCode === 'auth/weak-password') {
                    setIsValid({
                        ...isValid,
                        password: false
                    })
                }
            })

    }

    return (
        <SignUpStyled>
            <h1>Get Started</h1>
            <div className="options">
                <button className='option-btn' onClick={() => googleSignUp(provider, history)}><img src={googleIcon} alt="" width='20px' /> Sign In with Google</button>
            </div>

            {/* Form */}
            <FormStyled>
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input minLength="6" name="password" type="text" placeholder="Create Password" onChange={handleChange} required />

                {/* Error Messages */}
                {isValid.email ? null : <label>{inputErrors.email}</label>}
                {isValid.password ? null : <label>{inputErrors.password}</label>}
            </FormStyled>

            <button className='logBtn' onClick={handleSubmit}>Sign Up</button>
            <Link className='link-item' to='/'>Already Signed Up? Sign In</Link>
        </SignUpStyled>
    )
}