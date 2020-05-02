import { RECEIVE_ALL_SNEAKERS, RECEIVE_SNEAKER } from '../actions/sneakers_actions';

const sneakersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ALL_SNEAKERS:
            return action.sneakers
        case RECEIVE_SNEAKER:
            return { [action.sneaker.id]: action.sneaker };
        default:
            return oldState;
    }
}

export default sneakersReducer;