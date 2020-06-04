import { connect } from 'react-redux';
import ListingDetails from './listing_details';
import { fetchListings, fetchListing } from '../../actions/listings_actions';
import { fetchSneaker } from '../../actions/sneakers_actions';
import { addCartItem, fetchCart } from '../../actions/cart_actions'


const mSTP = (state, ownProps) => {
    // debugger
    return ({
        listings: Object.values(state.entities.listings),
        listing: state.entities.listings[ownProps.match.params.listingId],
        sneaker: state.entities.sneakers[ownProps.match.params.sneakerId],
        currentUser: state.entities.users[state.session.currentUserId]
    })
}

const mDTP = dispatch => ({
    fetchSneaker: sneakerId => dispatch(fetchSneaker(sneakerId)),
    fetchListings: sneakerId => dispatch(fetchListings(sneakerId)),
    fetchListing: (sneakerId, listingId) => dispatch(fetchListing(sneakerId, listingId)),
    addCartItem: cartItem => dispatch(addCartItem(cartItem)),
    fetchCart: () => dispatch(fetchCart())
})

export default connect(mSTP, mDTP)(ListingDetails) 