import React from 'react';
import ListingIndex from './listing_index';
import { Link } from 'react-redux';
import { Route } from 'react-router-dom';
import ListingDetailContainer from './listing_details_container';

const ListingIndexItem = ({ listing, sneaker }) => {
      
    return (
        <div className='listing-items'>

                <div className='listing-size'>
                    <a href={`#/sneakers/${sneaker.id}/listings/${listing.id}`}>{listing.size}</a>
                </div>
                
                <div className='listing-price'>
                    ${listing.price}
                </div>
            
            
            <Route path="/sneakers/:sneakerId/listing/:listingId" component={ListingDetailContainer} />
        </div>
    )
}

export default ListingIndexItem;