import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrNypViOxL7_isAbSs5ObTGZIhnPNjIyo",
  authDomain: "coderhouse-ecommerce-mlrosas.firebaseapp.com",
  projectId: "coderhouse-ecommerce-mlrosas",
  storageBucket: "coderhouse-ecommerce-mlrosas.appspot.com",
  messagingSenderId: "1069807733670",
  appId: "1:1069807733670:web:815b2ae059d28580a95d67"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
