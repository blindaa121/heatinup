import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { signout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return (
        {currentUser: state.entities.users[state.session.currentUserId]}
    )
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(signout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);