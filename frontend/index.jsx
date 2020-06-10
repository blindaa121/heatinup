import React from 'react';
import ReactDOM from 'react-dom'
import { signin, signout, signup } from './actions/session_actions'
import configureStore from './store/store';
import Root from './components/root';
import { fetchSneaker, fetchSneakers } from './actions/sneakers_actions';
import { fetchListings, fetchListing } from './actions/listings_actions';
import { fetchCart, addCartItem, deleteCartItem, updateCartItem } from './actions/cart_actions';

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

    // SNEAKER ACTIONS
    window.fetchSneakers = fetchSneakers
    window.fetchSneaker = fetchSneaker
    window.signout = signout
    
    // CART ACTIONS
    window.fetchCart = fetchCart 
    window.addCartItem = addCartItem 
    window.deleteCartItem = deleteCartItem
    window.updateCartItem = updateCartItem
});

