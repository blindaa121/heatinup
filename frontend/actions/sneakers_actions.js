export const RECEIVE_ALL_SNEAKERS = 'RECEIVE_ALL_SNEAKERS';
export const RECEIVE_SNEAKER = 'RECEIVE_SNEAKER';

import * as SneakerAPIUtil from '../util/sneaker_api_util'

const receiveSneakers = sneakers => ({
    type: RECEIVE_ALL_SNEAKERS,
    sneakers
});

const receiveSneaker = sneaker => {
    // debugger
    return ({
        type: RECEIVE_SNEAKER,
        sneaker
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
