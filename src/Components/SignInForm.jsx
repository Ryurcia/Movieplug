import React,{useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import { useForm } from '../Util/useForm';
// imgs
import googleIcon from '../img/google-icon.png';
import fbIcon from '../img/facebook-icon.png';

// Styles
import { SignUpStyled, FormStyled } from '../Styled-Components/StyledForms'


export const SignInForm = () => {
    // UseForm Callback
    const {inputValues,inputErrors, handleChange, handleSubmit} = useForm(handleSignIn);

    // States
    const [isValid,setIsValid] = useState({
        email : true,
        password : true,
    })


    function handleSignIn() {
        console.log(`Email: ${inputValues.email} Pass: ${inputValues.password}`);

        firebase.auth().signInWithEmailAndPassword(inputValues.email, inputValues.password)
        .then((user) => {
            // Signed in 
            console.log("Signed In");
        })
        .catch((error) => {
            let errorCode = error.code
            let errorMessage = error.message

            console.log(`${errorCode}: ${errorMessage}`);

            if(errorCode === 'auth/user-not-found') {
                console.log("invalid email");
                setIsValid({
                    ...isValid,
                    email: false
                })     
            }else if(errorCode === 'auth/weak-password'){
                setIsValid({
                    ...isValid,
                    password:false
                })
            }
        })
    }


    return (
        <SignUpStyled>
            <h1>Welcome Back</h1>
            <div className="options">
                <button className='option-btn'><img src={googleIcon} alt="" width='40px' /></button>
                <button className='option-btn'><img src={fbIcon} alt="" width='40px' /></button>
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
            <Link className='link-item' to='/'>New User? Sign Up</Link>
        </SignUpStyled>
    )
}