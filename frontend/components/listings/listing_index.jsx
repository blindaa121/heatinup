import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { sneaker, listings } = this.props;
        debugger;
        return (
            <div className='listing-container'>
                <span>Listings go here after clicking Buy New</span>
                {
                    listings.map(listing => (
                    <li>{listing.price} {listing.size}</li>
                    ))
                }
            </div>
        )
    }
}

export default ListingIndex;