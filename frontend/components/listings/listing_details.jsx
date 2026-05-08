import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const formatPrice = (n) => `$${Number(n).toLocaleString()}`;

class ListingDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { added: false };
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    componentDidMount() {
        const { sneakerId } = this.props.match.params;
        this.props.fetchSneaker(sneakerId);
    }

    handleAddToCart() {
        const cartItem = {
            listing_id: this.props.match.params.listingId,
        };
        this.props.addCartItem(cartItem)
            .then(() => this.props.fetchCart())
            .then(() => this.setState({ added: true }));
    }

    render() {
        const { sneaker, listing, currentUser } = this.props;
        if (this.state.added) return <Redirect to="/cart" />;
        if (!sneaker || !listing) return null;

        return (
            <div className="confirm">
                <div className="confirm__card">
                    <div className="confirm__media">
                        {sneaker.photoUrl
                            ? <img src={sneaker.photoUrl} alt={sneaker.name} />
                            : <div className="confirm__placeholder" />}
                    </div>

                    <div className="confirm__body">
                        <span className="confirm__brand">{sneaker.brand}</span>
                        <h1 className="confirm__name">{sneaker.name}</h1>

                        <dl className="confirm__meta">
                            <div className="confirm__row">
                                <dt>Size</dt>
                                <dd>US {listing.size}</dd>
                            </div>
                            <div className="confirm__row">
                                <dt>Condition</dt>
                                <dd>New</dd>
                            </div>
                            <div className="confirm__row">
                                <dt>Box</dt>
                                <dd>Good Condition</dd>
                            </div>
                            <div className="confirm__row confirm__row--total">
                                <dt>Lowest Ask</dt>
                                <dd>{formatPrice(listing.price)}</dd>
                            </div>
                        </dl>

                        <div className="confirm__actions">
                            {currentUser ? (
                                <button
                                    type="button"
                                    className="confirm__primary"
                                    onClick={this.handleAddToCart}
                                >
                                    Add to Cart
                                </button>
                            ) : (
                                <Link to="/login" className="confirm__primary">
                                    Sign in to buy
                                </Link>
                            )}
                            <Link to={`/sneakers/${sneaker.id}`} className="confirm__cancel">
                                Cancel
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListingDetails;
