export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';

import * as ListingAPIUtil from '../util/listing_api_util'

const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings
})

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
})

export const fetchListings = sneakerId => dispatch => {
    ListingAPIUtil.fetchListings(sneakerId)
        .then(listings => dispatch(receiveListings(listings)))
}