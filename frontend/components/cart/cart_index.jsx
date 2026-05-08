import React from 'react';
import { Link } from 'react-router-dom';
import CartIndexItem from './cart_index_item';

const SHIPPING = 12;
const formatPrice = (n) => `$${Number(n).toLocaleString()}`;

class CartIndex extends React.Component {
    componentDidMount() {
        this.props.fetchCart();
        window.scrollTo(0, 0);
    }

    render() {
        const { cartItems, deleteCartItem, subTotal } = this.props;
        const isEmpty = cartItems.length === 0;
        const total = subTotal + (isEmpty ? 0 : SHIPPING);

        return (
            <div className="cart">
                <header className="cart__header">
                    <h1 className="cart__title">Your Cart</h1>
                    <span className="cart__count">
                        {cartItems.length} item{cartItems.length === 1 ? '' : 's'}
                    </span>
                </header>

                {isEmpty ? (
                    <div className="cart__empty">
                        <p>Your cart is empty.</p>
                        <Link to="/sneakers" className="cart__cta">Shop sneakers</Link>
                    </div>
                ) : (
                    <div className="cart__layout">
                        <ul className="cart__list">
                            {cartItems.map((cartItem) => (
                                <CartIndexItem
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                    deleteCartItem={deleteCartItem}
                                />
                            ))}
                        </ul>

                        <aside className="cart__summary">
                            <h2 className="cart__summary-title">Order Summary</h2>

                            <dl className="cart__summary-list">
                                <div className="cart__summary-row">
                                    <dt>Subtotal</dt>
                                    <dd>{formatPrice(subTotal)}</dd>
                                </div>
                                <div className="cart__summary-row">
                                    <dt>Shipping</dt>
                                    <dd>{formatPrice(SHIPPING)}</dd>
                                </div>
                                <div className="cart__summary-row cart__summary-row--total">
                                    <dt>Total</dt>
                                    <dd>{formatPrice(total)}</dd>
                                </div>
                            </dl>

                            <button type="button" className="cart__checkout">
                                Checkout
                            </button>
                            <Link to="/sneakers" className="cart__continue">
                                Continue shopping
                            </Link>
                        </aside>
                    </div>
                )}
            </div>
        );
    }
}

export default CartIndex;
