import { connect } from 'react-redux';
import SneakerIndex from './sneakers_index';
import { fetchSneakers } from '../../actions/sneakers_actions'

const mSTP = state => ({
    sneakers: Object.values(state.entities.sneakers)
});

const mDTP = dispatch => ({
    fetchSneakers: () => dispatch(fetchSneakers())
});

export default connect(mSTP, mDTP)(SneakerIndex)