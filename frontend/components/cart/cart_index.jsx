import React from 'react';
import CartIndexItem from './cart_index_item';
import SneakerPanelIndex from '../sneaker_panel/random_panel/sneaker_panel_container'

class CartIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCart();
    }

    render() {

        const { cartItems, deleteCartItem, subTotal } = this.props;
     
        return (
        <div className='outer-sneakerComponent outer-cartComponent'>
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
                        <div className='order-shipping order-details'>
                         {/* ship to */}
                            <span>Ship To</span>
                            <span>3960 Landmark St, Culver City</span>
                        </div>
                        <div className='order-card-info order-details'>
                         {/* card info */}
                            <span>Payment</span>
                                <span>
                                    <i className="payment fab fa-cc-paypal"></i>
                                    <i className="payment fab fa-cc-apple-pay"></i>
                                    <i className="payment far fa-credit-card"></i>
                                    2324
                                </span>
                        </div>
                        <div className='order-subtotal order-details'>
                            <span>Subtotal</span>
                            <span>${subTotal}</span>
                        </div>
                        <div className='order-shipping order-details'>
                         {/* shipping */}
                            <span>Shipping</span>
                            <span>$12</span>
                        </div>
                        <div className='order-total order-details'>
                         {/* total */}
                            <span>Total</span>
                            <span>${subTotal + 12}</span>
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
            <div style={{borderTop: "1px solid lightgrey", width: "100%", marginTop: "40px"}} className='cart-border'></div>
            <SneakerPanelIndex />
        </div>
    ) 
}
}

export default CartIndex;
