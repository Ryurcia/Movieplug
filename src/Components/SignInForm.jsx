import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link, useHistory } from 'react-router-dom';
// Utils
import { useForm } from '../Util/useForm';
// imgs
import googleIcon from '../img/google-icon.png';

// Styles
import { SignInStyled, FormStyled } from '../Styled-Components/StyledForms'


export const SignInForm = () => {

    let history = useHistory();
    // UseForm Callback
    const { inputValues, inputErrors, handleChange, handleSubmit } = useForm(handleSignIn);

    // States
    const [isValid, setIsValid] = useState({
        email: true,
        password: true,
    })

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
                            email: false
                        })
                        break;
                    case 'auth/wrong-password':
                        setIsValid({
                            ...isValid,
                            password: false
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
        <SignInStyled>
            <h1>Welcome Back</h1>
            <div className="options">
                <button className='option-btn' onClick={googleSignUp}><img src={googleIcon} alt="" width='20px' /> Sign In with Google</button>
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