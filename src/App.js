import React, { Component } from 'react';
import Backendless from 'backendless';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Register from './pages/registration';
import Login from "./pages/login";
import Files from "./pages/files";
import Profile from "./pages/profile";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const APP_ID = '5700938D-8F15-FBD9-FFCF-2B1C3A0BD900';
const API_KEY = '20DD11EE-31CA-47DD-9D63-7574437E55F5';
Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

const initialState = {
  loading: true,
  message: '',
  error  : null
}

class App extends Component {
  state = initialState

    render() {
    const { error, loading, message } = this.state

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/register' element={<Register/>} />
                <Route path='/signin' element={<Login />} />
                <Route path='/myfiles' element={<Files/>} />
                <Route path='/profile' element={<Profile/>} />
            </Routes>
        </Router>

    );
  }
}

export default App;
                