export const RECEIVE_ALL_SNEAKERS = 'RECEIVE_ALL_SNEAKERS';
export const RECEIVE_SNEAKER = 'RECEIVE_SNEAKER';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW'



import * as SneakerAPIUtil from '../util/sneaker_api_util'

const receiveSneakers = sneakers => ({
    type: RECEIVE_ALL_SNEAKERS,
    sneakers
});

const receiveSneaker = sneaker => {
    return ({
        type: RECEIVE_SNEAKER,
        sneaker
    })
}

const receiveReviews = reviews => {
    return ({
        type: RECEIVE_ALL_REVIEWS,
        reviews
    })
}

const receiveReview = review => {
    return ({
        type: RECEIVE_REVIEW,
        review
    })
}

const removeReview = (sneakerId, reviewId) => {
    return ({
        type: REMOVE_REVIEW,
        reviewId
    })
}


export const fetchSneakers = () => dispatch => (
    SneakerAPIUtil.fetchSneakers()
        .then(sneakers => dispatch(receiveSneakers(sneakers)))
);

export const fetchSneaker = sneakerId => dispatch => (
    SneakerAPIUtil.fetchSneaker(sneakerId)
        .then(sneaker => dispatch(receiveSneaker(sneaker)))
);

export const fetchReviews = (sneakerId) => dispatch => (
    SneakerAPIUtil.fetchSneakerReviews(sneakerId)
        .then(reviews => dispatch(receiveReviews(reviews)))

)

export const createSneakerReview = review => dispatch => (
    SneakerAPIUtil.createSneakerReview(review)
        .then(createdReview => dispatch(receiveReview(createdReview)))
)

export const deleteSneakerReview = (sneakerId, reviewId) => dispatch => (
    SneakerAPIUtil.deleteSneakerReview(sneakerId, reviewId)
        .then(() => dispatch(removeReview(sneakerId, reviewId)))
)

export const updateSneakerReview = (review, sneakerId, reviewId) => dispatch => (
    SneakerAPIUtil.updateSneakerReview(review, sneakerId, reviewId)
        .then(updatedReview => dispatch(receiveReview(updatedReview)))
)

