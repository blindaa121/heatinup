import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { listings, sneaker } = this.props;
        return (
            <div className='listing-container'>
                <div className='listings-header'>
                    <span>Buy New</span> 
                    <h1>US Sizes</h1>
                </div>
                
                {
                    listings.map(listing => (
                    <a href={`#/sneakers/${sneaker.id}/listings/${listing.id}`}>
                        <ListingIndexItem key={listing.id} listing={listing} sneaker={sneaker}/>
                    </a>
                    ))
                }
            </div>
        )
    }
}

export default ListingIndex;