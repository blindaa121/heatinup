import { connect } from 'react-redux';
import { fetchReviews, createSneakerReview, deleteSneakerReview, updateSneakerReview } from '../../actions/sneakers_actions'
import Review from './ReviewForm';

const mSTP = (state, ownProps) => {
    const currentUser = ownProps.currentUser ? ownProps.currentUser : null
    const currentUserId = currentUser ? currentUser.id : null
    return ({
        reviews: ownProps.reviews,
        currentUser,
        currentUserId,
        sneakerId: ownProps.sneaker.id,
        formType: 'create'
    })
};


const mDTP = dispatch => ({
    fetchReviews: (sneakerId) => dispatch(fetchReviews(sneakerId)),
    createSneakerReview: (review) => dispatch(createSneakerReview(review)),
    deleteSneakerReview: (sneakerId, reviewId) => dispatch(deleteSneakerReview(sneakerId, reviewId)),
    updateSneakerReview: (review, sneakerId, reviewId) => dispatch(updateSneakerReview(review, sneakerId, reviewId))
});

export default connect(mSTP, mDTP)(Review); 