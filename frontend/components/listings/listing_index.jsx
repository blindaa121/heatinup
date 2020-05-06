import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { sneaker, listings } = this.props;
        return (
            <div className='listing-container'>
                <div className='listings-header'>
                    <span>Buy New</span> 
                    <h1>US Sizes</h1>
                </div>
                
                {
                    listings.map(listing => (
                    <ListingIndexItem listing={listing} />
                    // Index of individual listings. Listings should be clickable and directs user to that particular listings 
                    // which entails the sneaker info, price, size, condition. Users may add to cart depending if they are logged 
                    // in or not.
                    ))
                }
            </div>
        )
    }
}

export default ListingIndex;