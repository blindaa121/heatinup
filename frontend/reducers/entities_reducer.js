import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import sneakersReducer from './sneakers_reducer';
import listingsReducer from './listings_reducer';
import cartItemsReducer from './cart_items_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    sneakers: sneakersReducer,
    listings: listingsReducer,
    cartItems: cartItemsReducer,
    reviews: reviewsReducer
});

export default entitiesReducer;