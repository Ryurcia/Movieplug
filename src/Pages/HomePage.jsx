import React from 'react'
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
// Styled Components
import { ContentStyled } from '../Styled-Components/ContentStyled';

export const HomePage = () => {

    let history = useHistory();

    function handleSignOut(e) {
        e.preventDefault();
        firebase.auth().signOut().then(() => {
            localStorage.setItem('loggedIn', false);
            history.replace('/');
            console.log("Signed Out");
        })
    }

    return (
        <ContentStyled>
            <div className="content">
                <h1>Home Page</h1>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        </ContentStyled>
    )
}


