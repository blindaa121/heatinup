export const fetchCart = userId => (
    $.ajax({
        url: `/api/users/${userId}/cart_items`,
        method: 'GET'
    })
)

export const addCartItem = ({ userId, cart_item }) => (
    $.ajax({
        url: `/api/users/${userId}/cart_items`,
        method: 'POST',
        data: { cart_item }
    })
)

export const removeCartItem = id => (
    $.ajax({
        url: `/api/cart_items/${id}`,
        method: 'DELETE'
    })
)