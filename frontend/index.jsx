import React from 'react';
import ReactDOM from 'react-dom'
import { signin, signout, signup } from './actions/session_actions'
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

     //TESTING 
    window.store = store;
    window.signin = signin;
    window.signout = signout;
    window.signup = signup;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)   
});

