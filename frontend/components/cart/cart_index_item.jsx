import React from 'react';

const CartItemIndex = ({ cartItem, deleteCartItem }) => {
    return (
        <div className='cart-item'>
            <div className=''>
                <a href={`#/sneakers/${cartItem.sneakerId}`}><img className='cart-img' src={cartItem.photoUrl} alt=""/></a>
            </div>
            <button className='delete-cart-item' onClick={()=>deleteCartItem(cartItem.id)}>Remove</button>
            <div className='cart-item-details'>
                <span>{cartItem.sneakerName}</span>
                <span>{cartItem.size}</span>
                <span>{cartItem.price}</span>
                <span>{cartItem.sku}</span>
            </div>

        </div>
    )
}

export default CartItemIndex