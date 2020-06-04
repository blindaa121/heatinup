import React from 'react';

const CartItemIndex = ({ cartItem }) => {
    return (
        <div className='cart-item'>
            <span>{cartItem.sneakerName}</span>
        </div>
    )
}

export default CartItemIndex