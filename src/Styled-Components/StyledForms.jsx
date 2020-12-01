import styled from 'styled-components';



export const SignUpStyled = styled.div`
height:724px;
max-height:650px;
width:418px;
max-width:90%;
border:none;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
background-color:#222831;

h1 {
    color:#E8E8E8;
    font-size:3rem;
    font-weight:300;
}

.options {
    width:100%;
    display:flex;
    justify-content:center;
    gap:50px;
    .option-btn {
        padding:10px;
        border:1px solid black;
        border-radius:50%;
        background-color:#E8E8E8;
        cursor:pointer;
    }
}


.signUpBtn {
    border:none;
    color:#E8E8E8;
    font-size:1.5rem;
    text-transform:uppercase;
    background-color:transparent;
    cursor:pointer;
}

h3 {
    color:#E8E8E8;
    font-weight:400;
}
`


export const FormStyled = styled.form`
width:100%;
input {
    display:block;
    width:80%;
    margin:auto;
    margin-bottom:20px;
    padding:10px;
    border:none;
    border-radius:5px;

    &:focus {
        border:1.7px solid #70dafa;
    }
}
`