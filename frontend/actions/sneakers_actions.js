export const RECEIVE_ALL_SNEAKERS = 'RECEIVE_ALL_SNEAKERS';
export const RECEIVE_SNEAKER = 'RECEIVE_SNEAKER';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';



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
        .catch(err => console.log(err))
)

