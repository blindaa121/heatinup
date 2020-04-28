import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session.actions'

// const _nullUser = Object.freeze({ id: null })

const sessionReducer = (oldState = { id: null }, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            nextState[id] = action.currentUser.id;
            return nextState;
        case LOGOUT_CURRENT_USER:
            nextState[id] = null;
            return nextState;
        default:
            return oldState;
    }
};

export default sessionReducer;