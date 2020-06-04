export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
import * as CartAPIUtil from '../util/cart_api_util'

const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
})

const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
})

const removeCartItem = cartItemId => ({
    type: REMOVE_CART_ITEM,
    cartItemId
})


export const fetchCart = () => dispatch => (
    CartAPIUtil.fetchCart()
        .then(cartItems => dispatch(receiveCartItems(cartItems)))
)

export const addCartItem = cartItem => dispatch => (
    CartAPIUtil.addCartItem(cartItem)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const deleteCartItem = cartItemId => dispatch => (
    CartAPIUtil.removeCartItem(cartItemId)
        .then(() => dispatch(removeCartItem(cartItemId)))
)