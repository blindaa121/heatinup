import { RECEIVE_ALL_SNEAKERS, RECEIVE_SNEAKER } from '../actions/sneakers_actions';

const sneakersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ALL_SNEAKERS:
            return action.sneakers
        case RECEIVE_SNEAKER:
            const newSneaker = { [action.sneaker.id]: action.sneaker };
            return Object.assign({}, state, newSneaker)
        default:
            return oldState;
    }
}

export default sneakersReducer;