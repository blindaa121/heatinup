import { connect } from 'react-redux';
import CartIndex from './cart_index';
import { fetchCart, addCartItem, deleteCartItem } from '../../actions/cart_actions'

const mSTP = state => {
    return ({
        cartItems: Object.values(state.entities.cartItems),

    })
}

const mDTP = dispatch => ({
    fetchCart: () => dispatch(fetchCart()),
    addCartItem: cartItem => dispatch(addCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId))
})

export default connect(mSTP, mDTP)(CartIndex)