import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, BrowserRouter } from 'react-router-dom'
import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsExports);


ReactDOM.render(
  <React.StrictMode>
  	<BrowserRouter>
    	<App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
//<Route exact path ="/login" element={<Login />} />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
