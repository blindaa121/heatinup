export const fetchCart = () => (
  $.ajax({
    url: '/api/cart_items',
    method: 'GET',
  })
);

export const addCartItem = (cartItem) => (
  $.ajax({
    url: '/api/cart_items',
    method: 'POST',
    data: { cart_item: cartItem },
  })
);

export const removeCartItem = (id) => (
  $.ajax({
    url: `/api/cart_items/${id}`,
    method: 'DELETE',
  })
);

export const updateCartItem = (cartItem) => (
  $.ajax({
    url: `/api/cart_items/${cartItem.id}`,
    method: 'PATCH',
    data: { cart_item: cartItem },
  })
);
