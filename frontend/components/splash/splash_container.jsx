import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Splash from '../splash'
const mSTP = ({session, entities: { users }}) => {
    return {
        currentUser: users[session.id]
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Splash)