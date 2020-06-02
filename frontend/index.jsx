import React from 'react';
import ReactDOM from 'react-dom'
import { signin, signout, signup } from './actions/session_actions'
import configureStore from './store/store';
import Root from './components/root';
import { fetchSneakers } from './actions/sneakers_actions'
import { fetchSneaker } from './actions/sneakers_actions'
import { fetchListings } from './actions/listings_actions'
import { fetchListing } from './actions/listings_actions'

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)   
    //TESTING
    window.fetchListings = fetchListings
    window.fetchListing = fetchListing
    window.store = store 
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.fetchSneakers = fetchSneakers
    window.fetchSneaker = fetchSneaker
});

