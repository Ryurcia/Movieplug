import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
// Components
import { SignInForm } from '../Components/Auth/SignInForm';
// Styles
import { AuthSignInStyled, SignInTitleStyled } from '../Styled-Components/AuthStyled';



export const SignInPage = () => {

    let history = useHistory();

    const motionObjects = {
        initial : {
            x:'100vh', 
            opacity: 0,
            width: '100%'
        },
        animate : {
            x: 0,
            opacity: 1
        },
        exit : {
            x: '100vh', 
            opacity: 0,
            width: '100%'
        },
        transition : {
            ease: "easeIn", 
            duration: 0.5
        }
    }

    useEffect(() => {
        if(localStorage.getItem('loggedIn') === 'true') {
            setTimeout(() => {
                history.replace('/home')
            }, 2000);
        }
    })

    
    if(localStorage.getItem('loggedIn') === 'true') {
        return(
            <h3>You're already logged in</h3>
        )

    }else {
        return (
            <motion.div
                initial={motionObjects.initial}
                animate={motionObjects.animate}
                exit={motionObjects.exit}
                transition={motionObjects.transition}
            >
                <AuthSignInStyled>
                    <SignInTitleStyled>
                        <h1>Movieplug</h1>
                        <p>Jump back in and share your favorite films and shows with friends</p>
                    </SignInTitleStyled>

                    <SignInForm />

                </AuthSignInStyled>
            </motion.div>
        )
    }
    
}