import React from 'react';
import CartIndexItem from './cart_index_item';

class CartIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCart();
    }

    render() {
        const { cartItems } = this.props;
        
        return (
        <div className='outer-sneakerComponent'>
            <div className='sneakerComponent'>

                <div className='leftShoe-pane'>
                    <div className='cart-items'>
                        <h1>Cart Items</h1>
                        {
                        cartItems.map(cartItem => (
                            <CartIndexItem cartItem={cartItem} key={cartItem.id} />
                        ))
                        }
                    </div>
                </div>

                <div className='rightShoe-pane'>
    
                                <div>
                                    <h1>Order Summary</h1>
                                    <br />
                                    <p></p>
                                </div>
                    <button onClick={() => this.handleClick()} className='buy-new-btn'>Buy New</button>
                </div>

            </div>

            {/* <SneakerDetails sneaker={sneaker} />
            <Route exact path="/sneakers/:sneakerId/listing/:listingId" component={ListingDetailContainer} /> */}
        </div>
    ) 
}
}

export default CartIndex;
