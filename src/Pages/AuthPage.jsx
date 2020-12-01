import React from 'react';
// Components
import { SignUpForm } from '../Components/SignUpForm';
// Styles
import { AuthStyled, TitleStyled } from '../Styled-Components/AuthStyled';



export const AuthPage = () => {
    return (
        <AuthStyled>
            <TitleStyled>
                <h1>Movieplug</h1>
                <p>Share your favorite movies and shows with friends and the world!</p>
            </TitleStyled>
            {/* Form */}
            <SignUpForm />
        </AuthStyled>
    )
}