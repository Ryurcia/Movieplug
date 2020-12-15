import firebase from 'firebase';

export const provider = new firebase.auth.GoogleAuthProvider();

export const googleSignUp = (provider, history) => {

    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            console.log(token);

            // Changing Local Storage
            localStorage.setItem('loggedIn', true);

            // The signed-in user info.
            let user = result.user;
            console.log(user);

            // Push URL
            history.replace('/home');
        })
        .catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(`${errorCode}: ${errorMessage}`);

            history.replace('/');

            // The email of the user's account used.
            let email = error.email;
            console.log(email);

            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            console.log(credential);

        });

}