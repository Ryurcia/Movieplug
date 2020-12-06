import styled from 'styled-components';

export const AuthStyled = styled.div`
width:100%;
min-height:100vh;
display:flex;
align-items:center;
flex-wrap:wrap;
justify-content:space-around;
background-color:#F05454;

@media screen and (max-width:834px) {
flex-direction:column;
}

`

export const TitleStyled = styled.div`
color:#E8E8E8;
h1{
    text-transform:uppercase;
    font-weight: bolder;
    font-size:4.5rem;
}
p{
    font-size: 1.5rem;
    font-weight:300;
}

@media screen and (max-width: 1140px) {
    h1 {
        font-size: 3rem;
    }
    p {
        display: none;
    }
}

@media screen and (max-width: 650px) {
    h1 {
        color: #222831;
    }
}
`


// Sign In Page
export const AuthSignInStyled = styled(AuthStyled)`
background-color:#E8E8E8;
`

export const SignInTitleStyled = styled(TitleStyled)`
color:#222831;
`