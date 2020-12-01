import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Dependencies
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';


// Firebase init
let firebaseConfig = {
  apiKey: "AIzaSyBFxL0ffRhvfDh5V3378ecVlARCikl2Jt4",
  authDomain: "movieplug-3b17f.firebaseapp.com",
  databaseURL: "https://movieplug-3b17f.firebaseio.com",
  projectId: "movieplug-3b17f",
  storageBucket: "movieplug-3b17f.appspot.com",
  messagingSenderId: "716180884818",
  appId: "1:716180884818:web:75ca4f7c410d72f1643e8b",
  measurementId: "G-GNE1E6Q6SE"
}

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
