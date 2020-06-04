export const fetchCart = () => (
    $.ajax({
        url: `/api/cart_items`,
        method: 'GET'
    })
)

export const addCartItem = cart_item => (
    $.ajax({
        url: `/api/cart_items`,
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