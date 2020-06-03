import React from 'react';
import SneakerDetails from '../sneaker_show/sneaker_details'

class ListingDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { sneaker, listing } = this.props;
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
                                <span>Item </span>
                                <span>{sneaker.name}</span> 
                            </div>

                            <div className='listing-sz'>
                                <span>Size</span> 
                                <span>{listing.size}</span>
                                
                            </div>

                            <div className='listing-condition'>
                                <span>Condition</span> 
                                <span>New</span>
                            </div>

                            <div className='listing-box-condition'>
                                <span>Box</span> Good Condition
                            </div>

                          
                    
                            
                            
                            
                            
                        </div>
                       
                        
                        <button onClick={() => this.handleClick()} className='buy-new-btn'>Check Out</button>
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