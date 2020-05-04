import { RECEIVE_SNEAKER } from '../actions/sneakers_actions'

const ListingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SNEAKER:
            return action.sneaker.listings;
        default:
            return oldState;
    }
};

export default ListingsReducer;