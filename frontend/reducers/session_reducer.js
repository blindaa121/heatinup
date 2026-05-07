import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const NULL_SESSION = Object.freeze({
  currentUserId: null,
});

const sessionReducer = (state = NULL_SESSION, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return NULL_SESSION;
    default:
      return state;
  }
};

export default sessionReducer;
