import React from 'react';
import { motion } from 'framer-motion';
// Components
import { SignUpForm } from '../Components/SignUpForm';
// Styles
import { AuthStyled, TitleStyled } from '../Styled-Components/AuthStyled';



export const SignUpPage = () => {

    const motionObjects = {
        initial : {
            opacity: 0 
        },
        animate : {
            opacity: 1
        },
        exit : { 
            opacity: 0 
        },
        transition : {
            ease: "easeIn", 
            duration: 0.4 
        }
    }

    return (
        <motion.div
            initial={motionObjects.initial}
            animate={motionObjects.animate}
            exit={motionObjects.exit}
            transition={motionObjects.transition}
        >
            <AuthStyled>
                <TitleStyled>
                    <h1>Movieplug</h1>
                    <p>Share Your Favorite Movies/Shows with Your Friends and the World</p>
                </TitleStyled>

                <SignUpForm />

            </AuthStyled>
        </motion.div>
    )
}