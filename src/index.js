import App from './App';
import Backendless from "backendless";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const APP_ID = '588B8730-A152-A694-FF4F-654D140D5400';
const API_KEY = 'B9C8F4DA-A81E-45FA-B4C4-5D496472FE04';

Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
