import React from 'react'
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';

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
        <div>
            <h1>Home Page</h1>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}


