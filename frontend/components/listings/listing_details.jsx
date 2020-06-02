import React from 'react';
import SneakerDetails from '../sneaker_show/sneaker_details'

class ListingDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.fetchListing(sneaker.id, listsings)
    // }

    render() {
        const { sneaker, listing } = this.props;

        debugger
        if (!sneaker) return null;
        if (!listing) return null;
        return (
            <div className='outer-sneakerComponent'>
                <div className='sneakerComponent'>

                    <div className='leftShoe-pane'>
                        <img className='shoePane-img' src={sneaker.photoUrl}></img>
                        <span className='sneaker-footer'>{sneaker.brand} / {sneaker.silhouette} / {sneaker.name}</span>
                    </div>

                    <div className='rightShoe-pane'>
                        {listing.price} {listing.size}
                        <button onClick={() => this.handleClick()} className='buy-new-btn'>Buy New</button>
                    </div>

                </div>
                <div className='product-details'>
                    <h1>Product Details</h1>
                    <br />
                    {sneaker.description}
                </div>

                <SneakerDetails sneaker={sneaker} />
                {/* <Route exact path="/sneakers/:sneakerId/listing/:listingId" component={ListingDetailContainer} /> */}
            </div>
        )
    }
}


export default ListingDetails;