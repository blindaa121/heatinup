import { connect } from 'react-redux';
import Splash from './splash'
import { fetchSneakers } from '../../actions/sneakers_actions'

const mSTP = (state) => {
    return {
        sneakers: Object.values(state.entities.sneakers)
    }
}

const mDTP = dispatch => ({
    fetchSneakers: () => dispatch(fetchSneakers())
});

export default connect(mSTP, mDTP)(Splash)