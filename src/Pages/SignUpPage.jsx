import React from 'react';
import { motion } from 'framer-motion';
// Components
import { SignUpForm } from '../Components/SignUpForm';
import { SignInForm } from '../Components/SignInForm';
// Styles
import { AuthStyled, TitleStyled } from '../Styled-Components/AuthStyled';



export const SignUpPage = () => {
    return (
        <motion.div
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100vh', opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.2 }}
        >
            <AuthStyled>
                <TitleStyled>
                    <h1>Movieplug</h1>
                    <p>Create Your Account and Share Your Favorite Shows/Movies to the World</p>
                </TitleStyled>

                <SignUpForm />

            </AuthStyled>
        </motion.div>
    )
}