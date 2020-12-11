import React from 'react'
import {Route, Redirect, useHistory} from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest}) => {
    let history = useHistory();
    let isLoggedIn = localStorage.getItem('loggedIn');
    return (
        <Route {...rest} render={(props) => {
            if(isLoggedIn) {
                return <Component {...props} />;
            }else {
                return <Redirect to={{pathname: "/SignUp", state: {from: history.location}}} />
            }
        }} />
    )
}