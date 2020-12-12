import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../Util/useForm';
// imgs
import googleIcon from '../img/google-icon.png';

// Styles
import { SignUpStyled, FormStyled } from '../Styled-Components/StyledForms'


export const SignUpForm = () => {
    let history = useHistory();
    // useForm Callback
    const { inputValues, inputErrors, handleChange, handleSubmit } = useForm(handleSignUp);

    //States
    const [isValid, setIsValid] = useState({
        email: true,
        password: true,
    })

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
                history.replace('/');

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

    // Google Auth
    let provider = new firebase.auth.GoogleAuthProvider();

    const googleSignUp = () => {
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                let token = result.credential.accessToken;
                console.log(token);

                // The signed-in user info.
                let user = result.user;
                console.log(user);
            })
            .catch(function (error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(`${errorCode}: ${errorMessage}`);

                // The email of the user's account used.
                let email = error.email;
                console.log(email);

                // The firebase.auth.AuthCredential type that was used.
                let credential = error.credential;
                console.log(credential);

            });

    }

    return (
        <SignUpStyled>
            <h1>Get Started</h1>
            <div className="options">
                <button className='option-btn' onClick={googleSignUp}><img src={googleIcon} alt="" width='20px' /> Sign In with Google</button>
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
            <Link className='link-item' to='/SignIn'>Already Signed Up? Sign In</Link>
        </SignUpStyled>
    )
}