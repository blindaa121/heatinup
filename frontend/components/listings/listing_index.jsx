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
                <span>Listings go here</span>
            </div>
        )
    }
}

export default ListingIndex;