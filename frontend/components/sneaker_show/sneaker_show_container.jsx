import { connect } from 'react-redux';
import SneakerShow  from './sneaker_show'
import { fetchSneaker } from '../../actions/sneakers_actions' 

const mSTP = (state, ownProps) => {
    console.log(ownProps)
    return (

        {sneaker: state.entities.sneakers[ownProps.match.params.sneakerId],
        listings: state.entities.listings}
    )
};


const mDTP = dispatch => ({
    fetchSneaker: (sneakerId) => dispatch(fetchSneaker(sneakerId))
});

export default connect(mSTP, mDTP)(SneakerShow); 