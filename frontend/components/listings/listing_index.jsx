import React from 'react';
import ListingIndexItem from './listing_index_item';
import { Link } from 'react-router-dom';
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
                    {/* <Link to={`#/sneakers/${sneaker.id}`}>X</Link> */}
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