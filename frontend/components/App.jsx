import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utl'
import React from 'react';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBarContainer from './navbar/nav_bar_container';
import SplashContainer from './splash/splash_container';
import SneakerShowContainer from './sneaker_show/sneaker_show_container'
import SneakersContainer from './sneakers/sneakers_container'
import Styles from './styles/styles'
import ListingDetailsContainer from './listings/listing_details_container'
import CollectionContainer1 from './collections/the_last_dance/sneakers_container'
import CollectionContainer2 from './collections/fear_of_god/sneakers_container'
import CollectionContainer3 from './collections/off_white/sneakers_container'
import CartContainer from './cart/cart_index_container'
import Footer from './footer/footer';


const App = () => (
    <div className='app-container'>
        <Route path='/' component={NavBarContainer} />
        <Switch> 
            <Route exact path="/sneakers/:sneakerId/listings/:listingId" component={ListingDetailsContainer} />
            <Route path='/collections/thelastdance' component={CollectionContainer1} />
            <Route path='/collections/fog' component={CollectionContainer2} />
            <Route path='/collections/offwhite' component={CollectionContainer3} />
            <Route exact path='/sneakers/:sneakerId' component={SneakerShowContainer} />
            <Route exact path='/sneakers' component={SneakersContainer} />
            <Route path='/styles' component={Styles} />
            <AuthRoute path='/signup' component={SignUpFormContainer} />
            <AuthRoute path='/login' component={LogInFormContainer} />
            <Route exact path="/" component={SplashContainer} />
            <ProtectedRoute path='/cart' component={CartContainer} />
        </Switch>
        <Route path='/' component={Footer} />
    </div>
);

export default App;