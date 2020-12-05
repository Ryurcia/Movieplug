import React, {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import { useForm } from '../Util/useForm';
// imgs
import googleIcon from '../img/google-icon.png';
import fbIcon from '../img/facebook-icon.png';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

// Styles
import { SignUpStyled, FormStyled } from '../Styled-Components/StyledForms'


export const SignUpForm = () => {
    // useForm Callback
    const {inputValues,inputErrors, handleChange, handleSubmit} = useForm(handleSignUp);

    //States
    const [isValid,setIsValid] = useState({
        email : true,
        password : true,
    })


    function handleSignUp () {
        console.log("Signed Up");
        console.log(`Email: ${inputValues.email} Pass: ${inputValues.password}`);

        firebase.auth().createUserWithEmailAndPassword(inputValues.email, inputValues.password)
        .then((user) => {
            // Signed in 
            console.log("Signed Up");
            setIsValid({
                ...isValid,
                email: true,
                password:true
            })
        })
        .catch((error) => {
            let errorCode = error.code
            let errorMessage = error.message

            console.log(`${errorCode}: ${errorMessage}`);
            
            if(errorCode === 'auth/invalid-email' || errorCode === 'auth/email-already-in-use') {
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
            <h1>Get Started</h1>
            <div className="options">
                <button className='option-btn'><img src={googleIcon} alt="" width='40px' /></button>
                <button className='option-btn'><img src={fbIcon} alt="" width='40px' /></button>
            </div>

            {/* Form */}
            <FormStyled>
                <div>
                    <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                </div>
                <div>
                    <input minLength="6" name="password" type="text" placeholder="Create Password" onChange={handleChange} required />
                </div>

                {/* Error Messages */}
                {isValid.email ? null : <label>{inputErrors.email}</label>}
                {isValid.password ? null : <label>{inputErrors.password}</label>}
            </FormStyled>

            <button className='logBtn' onClick={handleSubmit}>Sign Up</button>
            <Link className='link-item' to='/SignIn'>Already Signed Up? Sign In</Link>
        </SignUpStyled>
    )
}