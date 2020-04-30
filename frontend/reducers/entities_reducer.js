import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import sneakersReducer from './sneakers_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    sneakers: sneakersReducer
});

export default entitiesReducer;