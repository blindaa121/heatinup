import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import React from 'react';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBarContainer from './navbar/nav_bar_container';
import SplashContainer from './splash/splash_container';
import SneakerShowContainer from './sneaker_show/sneaker_show_container'
import SneakersContainer from './sneakers/sneakers_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utl'
// import ListingsContainer from './listings/listing_container'

const App = () => (
    <div>
        <Route path='/' component={NavBarContainer} />
        <Switch> 
            {/* <Route path="sneakers/:sneakerId/listings/:listingId" component={ListingsItemContainer} /> */}
            {/* <Route path="sneakers/:sneakerId/listings/" component={ListingsContainer} /> */}
            <Route path='/sneakers/:sneakerId' component={SneakerShowContainer} />
            <Route path='/sneakers' component={SneakersContainer} />
            <AuthRoute path='/signup' component={SignUpFormContainer} />
            <AuthRoute path='/login' component={LogInFormContainer} />
            <Route exact path="/" component={SplashContainer} />
            <Route path='*' component={SplashContainer} />
        </Switch>
    </div>
);

export default App;