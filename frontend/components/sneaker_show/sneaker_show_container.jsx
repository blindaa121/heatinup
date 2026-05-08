import { connect } from 'react-redux';
import SneakerShow from './sneaker_show';
import { fetchSneaker, fetchReviews } from '../../actions/sneakers_actions';

const mapStateToProps = (state, ownProps) => ({
    sneaker: state.entities.sneakers[ownProps.match.params.sneakerId],
    listings: Object.values(state.entities.listings || {}),
    reviews: Object.values(state.entities.reviews || {}),
    currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = (dispatch) => ({
    fetchSneaker: (sneakerId) => dispatch(fetchSneaker(sneakerId)),
    fetchReviews: (sneakerId) => dispatch(fetchReviews(sneakerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SneakerShow);
