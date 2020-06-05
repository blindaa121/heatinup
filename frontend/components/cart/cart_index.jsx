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
        const { cartItems, deleteCartItem } = this.props;

        return (
        <div className='outer-sneakerComponent'>
            <div className='sneakerComponent'>

                <div className='leftCart-pane'>
                    <div className='cart-items'>
                        <h1 className='cart-items-header'>Shopping Cart</h1>
                        {
                            cartItems.map(cartItem => (<CartIndexItem cartItem={cartItem} deleteCartItem={deleteCartItem} key={cartItem.id} />))
                        }
                    </div>
                </div>

                <div className='rightCart-pane'>
                    <div className='order-summary'>
                        <h1 className='order-summary-header'>Order Summary</h1>
                        <div className=''>
                         {/* ship to */}
                        </div>
                        <div>
                         {/* card info */}
                        </div>
                        <div>
                         {/* subtotal */}
                        </div>
                        <div>
                         {/* shipping */}
                        </div>
                        <div>
                         {/* total */}
                        </div>
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
