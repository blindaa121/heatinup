import React from 'react';
import { Route } from 'react-router-dom';
import ListingDetailContainer from './listing_details_container';

const ListingIndexItem = ({ listing, sneaker }) => {
      
    return (
        <div className='listing-items'>
                    <div className='listing-size'>
                        {listing.size}
                    </div>
                    
                    <div className='listing-price'>
                        ${listing.price}
                    </div>         
            <Route path="/sneakers/:sneakerId/listing/:listingId" component={ListingDetailContainer} />
        </div>
    )
}

export default ListingIndexItem;