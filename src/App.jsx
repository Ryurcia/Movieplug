import React from 'react';
// Pages
import { AuthPage } from './Pages/AuthPage';
// Global Style
import { GlobalStyle } from './Styled-Components/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AuthPage />
    </div>
  );
}

export default App;
