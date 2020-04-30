import { RECEIVE_ALL_SNEAKERS, RECEIVE_SNEAKER } from '../actions/sneakers_actions';

const sneakersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_ALL_SNEAKERS:
            return action.sneakers
        case RECEIVE_SNEAKER:
            
        default:
            return oldState;
    }
}