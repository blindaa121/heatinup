import { connect } from 'react-redux';
import SneakerShow  from './sneaker_show'
import { fetchSneaker } from '../../actions/sneakers_actions' 

const mSTP = (state, ownProps) => ({
    sneaker: state.entities.sneakers[ownProps.match.params.sneakerId]
});


const mDTP = dispatch => ({
    fetchSneaker: (sneakerId) => dispatch(fetchSneaker(sneakerId))
});

export default connect(mSTP, mDTP)(SneakerShow);