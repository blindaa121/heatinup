import React from 'react'; 
import { connect } from 'react-redux';
import SneakerPanelIndex from './sneaker_panel_index'
import { fetchSneakers } from '../../actions/sneakers_actions'

const mSTP = state => ({
    sneakers: Object.values(state.entities.sneakers).slice(1,5)
})

const mDTP = dispatch => ({
    fetchSneakers: () => dispatch(fetchSneakers())
})

export default connect(mSTP, mDTP)(SneakerPanelIndex)