import React from 'react';
import { motion } from 'framer-motion';
// Components
import { SignInForm } from '../Components/SignInForm';
// Styles
import { AuthSignInStyled, SignInTitleStyled } from '../Styled-Components/AuthStyled';



export const SignInPage = () => {
    return (
        <motion.div
            initial={{ x: '100vh', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100vh', opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.3 }}
        >
            <AuthSignInStyled>
                <SignInTitleStyled>
                    <h1>Welcome Back</h1>
                    <p>Jump back in and share your favorite films and shows with friends</p>
                </SignInTitleStyled>

                <SignInForm />

            </AuthSignInStyled>
        </motion.div>
    )
}