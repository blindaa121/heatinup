import React from 'react';
import ListingIndex from './listing_index';

const ListingIndexItem = ({ listing }) => {
    return (
        <div className='listing-items'>

            <div className='listing-size'>
                {listing.size}
            </div>

            <div className='listing-price'>
                {`${listing.price}`}
            </div>

        </div>
    )
}

export default ListingIndexItem;