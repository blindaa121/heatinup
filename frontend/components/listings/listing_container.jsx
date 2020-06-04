import { connect } from 'react-redux';
import ListingIndex from './listing_index';
import { fetchSneaker } from '../../actions/sneakers_actions';
import { fetchListings } from '../../actions/listings_actions';

const mSTP = (state, ownProps) => {
    return ({
        listings: Object.values(state.entities.listings),
    })
}

const mDTP = dispatch => ({
    fetchSneaker: sneakerId => dispatch(fetchSneaker(sneakerId)),
    // fetchListings: sneakerId => dispatch(fetchListings(sneakerId))
})

export default connect(mSTP, mDTP)(ListingIndex) 