import React from 'react';

const SneakerItemIndex = ({ sneaker }) => {
    return (
        <a className='sneakerLink' href={`#/sneakers/${sneaker.id}`}>
            <div className='sneakerItem'>
                <img src={sneaker.photoUrl} />
                <span className='sneaker-item-brand'>{sneaker.brand}</span>
                <span className='sneakerLink'>{sneaker.name}</span>
            </div>
        </a>
    )
}

export default SneakerItemIndex