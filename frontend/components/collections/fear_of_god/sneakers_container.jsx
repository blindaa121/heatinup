import { connect } from 'react-redux';
import SneakerIndex from './sneakers_index';
import { fetchSneakers } from '../../actions/sneakers_actions'

const mSTP = (state, ownProps) => ({
    sneakers: Object.values(state.entities.sneakers),
    sneaker: state.entities.sneakers[ownProps.match.params.sneakerId]
});

const mDTP = dispatch => ({
    fetchSneakers: () => dispatch(fetchSneakers())
});

export default connect(mSTP, mDTP)(SneakerIndex)