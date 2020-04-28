import React from 'react';
import ReactDOM from 'react-dom'
import { signin, signout, signup } from './actions/session_actions'
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to HEAT!</h1>, root)

    //TESTING 
    const store = configureStore();
    window.store = store;
    window.signin = signin;
    window.signout = signout;
    window.signup = signup;
}) 

