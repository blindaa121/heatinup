import React from 'react';

const CartItemIndex = ({ cartItem, deleteCartItem }) => {
    return (
        <div className='cart-item'>
            <div className=''>
                <a href={`#/sneakers/${cartItem.sneakerId}`}><img className='cart-img' src={cartItem.photoUrl} alt=""/></a>
            </div>
            <div className='cart-item-details'>
                <span>{cartItem.sneakerName}</span>
                <span>SKU {cartItem.sku}</span>
                <span>Size {cartItem.size}</span>
                <span>${cartItem.price}</span>

                <div className='delete-cart-item'>
                    <button className='delete-cart-item' onClick={()=>deleteCartItem(cartItem.id)}>X</button>
                </div>
            </div>

        </div>
    )
}

export default CartItemIndex