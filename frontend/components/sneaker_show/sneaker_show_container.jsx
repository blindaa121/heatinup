import { connect } from 'react-redux';
import { SneakerShow } from './sneaker_show'
import { fetchSneaker } from '../../actions/sneakers_actions' 
// const mSTP = state => ({
    
// })

const mDTP = dispatch => ({
    fetchSneaker: (sneakerId) => dispatch(fetchSneaker(sneakerId))
})