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
import { SignInStyled, FormStyled } from '../../Styled-Components/StyledForms'


export const SignInForm = () => {
    // UseForm Callback
    const { inputValues, inputErrors, handleChange, handleSubmit } = useForm(handleSignIn);

    //Valid States will determine whether or not to trigger error messages from useForm
    const [isValid, setIsValid] = useState({
        email: true,
        password: true,
    })

    let history = useHistory();

    function handleSignIn() {
        console.log(`Email: ${inputValues.email} Pass: ${inputValues.password}`);

        firebase.auth().signInWithEmailAndPassword(inputValues.email, inputValues.password)
            .then((user) => {
                // Signed in 
                console.log("Signed In");

                // Local Storage keeps user logged in
                localStorage.setItem('loggedIn', true);
                history.replace('/home');
            })
            .catch((error) => {
                let errorCode = error.code
                let errorMessage = error.message

                console.log(`${errorCode}: ${errorMessage}`);

                localStorage.setItem('loggedIn', false);

                switch (errorCode) {
                    case 'auth/user-not-found':
                        setIsValid({
                            ...isValid,
                            email: false,
                            password: true
                        })
                        break;
                    case 'auth/wrong-password':
                        setIsValid({
                            ...isValid,
                            password: false,
                            email: true
                        })
                        break;
                    default:
                        setIsValid({
                            ...isValid,
                            email: false,
                            password: false
                        })
                        break;
                }

            })
    }

    return (
        <SignInStyled>
            <h1>Welcome Back</h1>
            <div className="options">
                <button className='option-btn' onClick={() => googleSignUp(provider, history)}><img src={googleIcon} alt="" width='20px' /> Sign In with Google</button>
            </div>

            {/* Form */}
            <FormStyled>
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

                {/* Error Messages */}
                {isValid.email ? null : <label>{inputErrors.emailSignIn}</label>}
                {isValid.password ? null : <label>{inputErrors.passwordSignIn}</label>}
            </FormStyled>

            <button className='logBtn' onClick={handleSubmit}>Sign In</button>
            <Link className='link-item' to='/SignUp'>New User? Sign Up</Link>
        </SignInStyled>
    )
}