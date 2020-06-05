import React from 'react';
import CartIndexItem from './cart_index_item';

class CartIndex extends React.Component {
    constructor(props) {
        super(props)
        this.subTotal = this.subTotal.bind(this)
    }

    componentDidMount() {
        this.props.fetchCart();
    }

    subTotal(cost) {
        let subTotal = 0;
        return subTotal += cost;
    }

    render() {

        const { cartItems, deleteCartItem, subTotal } = this.props;
     
        return (
        <div className='outer-sneakerComponent'>
            <div className='sneakerComponent'>

                <div className='leftCart-pane'>

                    <div className='cart-items1'>

                        <div className='cart-items'>
                            <h1 className='cart-items-header'>Shopping Cart</h1>
                            <h3 className='total-items'>Total Items: {cartItems.length}</h3>
                        </div>

                        <div className='cart-items-containter'>
                            {
                                cartItems.map(cartItem => (<CartIndexItem cartItem={cartItem} deleteCartItem={deleteCartItem} key={cartItem.id} />))
                            }
                        </div>

                    </div>

                </div>

                <div className='rightCart-pane'>
                    <div className='order-summary'>
                        <h1 className='order-summary-header'>Order Summary</h1>
                        <div className='order-shipping'>
                         {/* ship to */}
                        </div>
                        <div className='order-card-info'>
                         {/* card info */}
                        </div>
                        <div className='order-subtotal'>
                        {
                            subTotal + 10
                        }
                        </div>
                        <div className='order-shipping'>
                         {/* shipping */}
                        </div>
                        <div className='order-total'>
                         {/* total */}
                        </div>
                    </div>
                    {/* <button onClick={() => this.handleClick()} className='buy-new-btn'>Buy New</button> */}
                    <div className='network-links'>
                            <a className='linked-in' href="https://www.linkedin.com/in/bryan-linda-44389794/">
                                <div className='linked-in-btn'>
                                LinkedIn
                                </div>
                            </a>
                        
                            <a className='github' href="https://github.com/blindaa121/heatinup">
                                <div className='github-btn'>
                                    GitHub
                                </div>
                            </a>
                    </div>

                </div>

            </div>

            {/* <SneakerDetails sneaker={sneaker} />
            <Route exact path="/sneakers/:sneakerId/listing/:listingId" component={ListingDetailContainer} /> */}
        </div>
    ) 
}
}

export default CartIndex;
