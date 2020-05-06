import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.fetchListings(sneaker.id)
    }

    render () {
        const { sneaker, listings } = this.props;
        return (
            <div className='listing-container'>
                <span>Listings go here after clicking Buy New</span>
                {
                    listings.map(listing => (
                    <li>{listing.size} {listing.price}</li>
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