import React from 'react';
import styled from 'styled-components';
// Material Icons
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

export const NavComponents = () => {

    return (
        <NavStyled>
            <PersonOutlineOutlinedIcon className='navIcon' />
            <HomeOutlinedIcon className='navIcon' />
            <PublicOutlinedIcon className='navIcon' />
            <ExitToAppOutlinedIcon className='navIcon' />
        </NavStyled>
    )
}


const NavStyled = styled.div`
height:100vh;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;

width:70px;
border: 2px solid rgba(51, 51, 51, 0.30);
border-radius: 23px;

background-color: rgba(51, 51, 51, 0.12);

.navIcon {
    font-size:40px;
}

`

