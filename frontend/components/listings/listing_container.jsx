import { connect } from 'react-redux';
import ListingIndex from './listing_index'

const mSTP = (state, ownProps) => ({
    listings: Object.values(state.entities.listings),
    listing: state.entities.listings[ownProps.match.params.sneakerId]
})

const mDTP = dispatch => ({
    fetchSneaker: sneakerId => dispatch(fetchSneaker(sneakerId)),
    fetchListings: sneakerId => dispatch(fetchListings(sneakerId))
})

export default connect(mSTP, mDTP)(ListingIndex) 