import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// Pages
import { SignUpPage } from './Pages/SignUpPage';
import { SignInPage } from './Pages/SignInPage';
// Global Style
import { GlobalStyle } from './Styled-Components/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence>
        <Switch>
          <Route exact path='/' component={SignUpPage} />
          <Route exact path='/SignIn' component={SignInPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
