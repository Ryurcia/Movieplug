import React from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    let history = useHistory();

    return (
        <Route {...rest} render={(props) => {
            if (localStorage.getItem('loggedIn') === 'true') {
                return <Component {...props} />;
            } else {
                return <Redirect to="/SignIn" />
            }
        }} />
    )
}