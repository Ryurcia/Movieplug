import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// Pages
import { SignUpPage } from './Pages/SignUpPage';
import { SignInPage } from './Pages/SignInPage';
import { HomePage } from './Pages/HomePage';
import { ProfilePage } from './Pages/ProfilePage';
import { PrivateRoute } from './Components/PrivateRoute';
// Components
import NavBar from './Components/Nav/NavBar';
// Global Style
import { GlobalStyle } from './Styled-Components/GlobalStyles';

const App = () => {

  return (
    <StyledApp>
      <GlobalStyle />
      <NavBar />
      <AnimatePresence>
        <Switch>
          {/* Default Route will be /home */}
          <Route exact path='/'>
            <Redirect to="/home" />
          </ Route>
          <PrivateRoute exact path='/home' component={HomePage} />
          <PrivateRoute exact path='/profile' component={ProfilePage} />
          <Route exact path='/SignUp' component={SignUpPage} />
          <Route exact path="/SignIn" component={SignInPage} />
        </Switch>
      </AnimatePresence>
    </StyledApp>
  );
}

export default App;


const StyledApp = styled.div`
width:100%;
display: flex;
flex-direction: row;
`