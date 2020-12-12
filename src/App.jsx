import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// Pages
import { SignUpPage } from './Pages/SignUpPage';
import { SignInPage } from './Pages/SignInPage';
import { HomePage } from './Pages/HomePage';
import { PrivateRoute } from './Components/PrivateRoute';
// Global Style
import { GlobalStyle } from './Styled-Components/GlobalStyles';

function App() {

  console.log(localStorage.getItem('loggedIn'));

  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence>
        <Switch>
          <PrivateRoute exact path='/' component={HomePage} />
          <Route exact path='/SignUp' component={SignUpPage} />
          <Route exact path='/SignIn' component={SignInPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
