import React from 'react';
import firebase from 'firebase';
import { Link, withRouter, useHistory } from 'react-router-dom';
// Material Icons
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
// Styled Components
import { NavStyled } from '../../Styled-Components/NavStyled';

const NavComponents = (props) => {
    let history = useHistory();
    const { location } = props; //Gets current location path

    function handleSignOut(e) {
        e.preventDefault();
        firebase.auth().signOut().then(() => {
            localStorage.setItem('loggedIn', false);
            history.replace('/');
            console.log("Signed Out");
        })
    }

    return (
        <NavStyled>
            <Link className={location.pathname.match('/profile') ? 'nav-link active' : 'nav-link'} to='/profile'>
                <PersonOutlineOutlinedIcon className='navIcon' />
                <h2>Profile</h2>
            </Link>
            <Link className={location.pathname.match('/home') ? 'nav-link active' : 'nav-link'} to='/home'>
                <HomeOutlinedIcon className='navIcon' />
                <h2>Home</h2>
            </Link>
            <Link className={location.pathname.match('/explore') ? 'nav-link active' : 'nav-link'} to='/explore'>
                <PublicOutlinedIcon className='navIcon' />
                <h2>Explore</h2>
            </Link>
            <div className='nav-link' id='sign-out' onClick={handleSignOut}>
                <ExitToAppOutlinedIcon className='navIcon' />
                <h2>Sign Out</h2>
            </div>
        </NavStyled>
    )
}

export default withRouter(NavComponents);

