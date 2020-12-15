import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// Component(s)
import { NavBar } from './Components/NavBar';
// Pages
import { SignUpPage } from './Pages/SignUpPage';
import { SignInPage } from './Pages/SignInPage';
import { HomePage } from './Pages/HomePage';
import { PrivateRoute } from './Components/PrivateRoute';
// Global Style
import { GlobalStyle } from './Styled-Components/GlobalStyles';

const App = () => {

  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence>
        <Switch>
          {/* Default Route will be /home */}
          <Route exact path='/'>
            <Redirect to="/home" />
          </ Route>
          <PrivateRoute exact path='/home' component={HomePage} />
          <Route exact path='/SignUp' component={SignUpPage} />
          <Route exact path="/SignIn" component={SignInPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
