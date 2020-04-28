import React from 'react';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Route } from 'react-router-dom';
import NavBarContainer from './navbar/nav_bar'
const App = () => (
    <div>
        <div>
            <Route path='/' component={NavBarContainer} />
            <Route path='/signup' component={SignUpFormContainer} />
            <Route path='/login' component={LogInFormContainer} />
        </div>
    </div>
);

export default App;