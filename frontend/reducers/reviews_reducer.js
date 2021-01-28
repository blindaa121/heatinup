import {RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS, REMOVE_REVIEW, RECEIVE_SNEAKER} from '../actions/sneakers_actions';

const reviewsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            console.log('receive all review hit')
            return action.reviews
        case RECEIVE_REVIEW:
            console.log('receive review hit')
            nextState[action.review.id] = action.review 
            return nextState
        default:
            return oldState;
    }
}

export default reviewsReducer;