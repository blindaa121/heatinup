import React from 'react';
import SneakerDetails from '../sneaker_show/sneaker_details'
import { addCartItem } from '../../actions/cart_actions';
import { Redirect } from 'react-router-dom';

class ListingDetails extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        window.previousUrl = this.props.match.url
    }
    
    componentDidMount() {
        this.props.fetchSneaker(this.props.match.params.sneakerId)
    }
    
    handleClick() {
        let cartItem = {
            user_id: this.props.currentUser.id,
            listing_id: this.props.match.params.listingId
        }
        this.props.addCartItem(cartItem);
        this.props.fetchCart();
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

                            <span className='cancel-btn'>
                                <a className='cancel-btn' href={`#/sneakers/${sneaker.id}`}>Cancel</a>
                            </span>
                        </div>
                       
                        {
                            currentUser ? <a className='buy-new-btn' href="#/cart"><button onClick={() => this.handleClick()}>Add to Cart</button></a> : (
                            <a className='buy-new-btn' href="#/login"><button>Sign In</button></a> 
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