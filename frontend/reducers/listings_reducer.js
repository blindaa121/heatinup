import { RECEIVE_SNEAKER } from '../actions/sneakers_actions';

import { RECEIVE_LISTINGS } from '../actions/listings_actions'

const ListingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_LISTINGS:
            return action.listings;
        case RECEIVE_SNEAKER:
            return action.sneaker.listings;
        default:
            return oldState;
    }
};

export default ListingsReducer;