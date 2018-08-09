import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase';
  
// Initialize Firebase
var config = {
    apiKey: "AIzaSyB_hN1QQRSSeCSOyjpSHSh0KE8PaxGFrqo",
    authDomain: "developer-circle-monterrey.firebaseapp.com",
    databaseURL: "https://developer-circle-monterrey.firebaseio.com",
    projectId: "developer-circle-monterrey",
    storageBucket: "developer-circle-monterrey.appspot.com",
    messagingSenderId: "823187373285"
  };

  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
