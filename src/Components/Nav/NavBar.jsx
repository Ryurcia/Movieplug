import React from 'react';
import { withRouter } from 'react-router-dom';
// Components
import { NavComponents } from './NavComponent';


const NavBar = (props) => {

    const { location } = props;
    return (
        location.pathname.match('/SignIn') || location.pathname.match('/SignUp')
            ? null
            : <NavComponents />
    )

}

export default withRouter(NavBar);