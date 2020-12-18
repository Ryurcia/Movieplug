import styled from 'styled-components'

export const NavStyled = styled.div`
height:100vh;
display:flex;
flex-direction:column;
justify-content:justified;
align-items:center;

width:300px;
border: 2px solid rgba(51, 51, 51, 0.30);

background-color: #222831;

.active {
    background-color:#3e4857;
    h2{
        font-weight:bolder;
    }
}
.nav-link {
    width:100%;
    height: 100px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    color: #E8E8E8;
    h2{
        padding-left:20px;
    }

    &:hover {
        background-color:#3e4857;
    }
    
}

.navIcon {
    font-size:40px;
}

#sign-out:hover {
    color:#e42121;
    cursor: pointer;
}

`