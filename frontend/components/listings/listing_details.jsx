import React from 'react';
import SneakerDetails from '../sneaker_show/sneaker_details'

class ListingDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { sneaker, listing, currentUser } = this.props;
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
                        <div className='listing-details'>

                            <div className='listing-price'>
                                <h3>Lowest Price</h3>
                                <br/>
                                <span>${listing.price}</span>
                            </div>

                            <div className='listing-item'>
                                <span className='listing-cat'>Item </span>
                                <span>{sneaker.name}</span> 
                            </div>

                            <div className='listing-sz'>
                                <span className='listing-cat'>Size</span> 
                                <span>{listing.size}</span>
                                
                            </div>

                            <div className='listing-condition'>
                                <span className='listing-cat'>Condition</span> 
                                <span>New</span>
                            </div>

                            <div className='listing-box-condition'>
                                <span className='listing-cat'>Box</span>
                                <span>Good Condition</span>
                                
                            </div>

                        </div>
                       
                        {
                            currentUser ? <button onClick={() => this.handleClick()} className='buy-new-btn'>Check Out</button> : (
                                <button onClick={() => this.handleClick()} className='buy-new-btn'>Sign In</button>
                            )
                        }
                        
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