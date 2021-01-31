import { connect } from 'react-redux';
import SneakerShow  from './sneaker_show'
import { fetchSneaker, fetchReviews, createSneakerReview, deleteSneakerReview } from '../../actions/sneakers_actions' 
// import { createSneakerReview } from '../../util/sneaker_api_util';

const mSTP = (state, ownProps) => {
    return ({
        sneaker: state.entities.sneakers[ownProps.match.params.sneakerId],
        listings: state.entities.listings,
        reviews: Object.values(state.entities.reviews),
        currentUser: state.entities.users[state.session.currentUserId]
    })
};


const mDTP = dispatch => ({
    fetchSneaker: (sneakerId) => dispatch(fetchSneaker(sneakerId)),
    fetchReviews: (sneakerId) => dispatch(fetchReviews(sneakerId)),
});

export default connect(mSTP, mDTP)(SneakerShow); 