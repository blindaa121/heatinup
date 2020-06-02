import { connect } from 'react-redux';
import ListingDetails from './listing_details';
import { fetchListings, fetchListing } from '../../actions/listings_actions';
import { fetchSneaker } from '../../actions/sneakers_actions';


const mSTP = (state, ownProps) => {
    debugger
    return ({
        listings: Object.values(state.entities.listings),
        listing: state.entities.listings[ownProps.match.params.listingId],
        sneaker: state.entities.sneakers[ownProps.match.params.sneakerId]
    })
}

const mDTP = dispatch => ({
    fetchSneaker: sneakerId => dispatch(fetchSneaker(sneakerId)),
    fetchListings: sneakerId => dispatch(fetchListings(sneakerId)),
    fetchListing: (sneakerId, listingId) => dispatch(fetchListing(sneakerId, listingId))
})

export default connect(mSTP, mDTP)(ListingDetails) 