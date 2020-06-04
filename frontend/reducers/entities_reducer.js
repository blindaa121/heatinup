import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import sneakersReducer from './sneakers_reducer';
import listingsReducer from './listings_reducer';
import cartItemsReducer from './cart_items_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    sneakers: sneakersReducer,
    listings: listingsReducer,
    cartItems: cartItemsReducer
});

export default entitiesReducer;