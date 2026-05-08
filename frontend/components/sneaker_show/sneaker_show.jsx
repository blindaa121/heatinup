import React from 'react';
import { Link } from 'react-router-dom';
import ReviewFormContainer from '../review/ReviewFormContainer';
import SneakerDetails from './sneaker_details';

const formatPrice = (n) => `$${Number(n).toLocaleString()}`;

class SneakerShow extends React.Component {
    componentDidMount() {
        const { sneakerId } = this.props.match.params;
        this.props.fetchSneaker(sneakerId);
        this.props.fetchReviews(sneakerId);
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        const { sneakerId } = this.props.match.params;
        if (sneakerId !== prevProps.match.params.sneakerId) {
            this.props.fetchSneaker(sneakerId);
            this.props.fetchReviews(sneakerId);
        }
    }

    render() {
        const { sneaker, listings, reviews, currentUser } = this.props;
        if (!sneaker) return null;

        const sortedListings = (listings || [])
            .slice()
            .sort((a, b) => Number(a.size) - Number(b.size));
        const lowestPrice = sortedListings.length
            ? Math.min(...sortedListings.map((l) => l.price))
            : null;

        return (
            <div className="show">
                <div className="show__primary">
                    <div className="show__media">
                        {sneaker.photoUrl
                            ? <img src={sneaker.photoUrl} alt={sneaker.name} />
                            : <div className="show__placeholder" />}
                    </div>

                    <aside className="show__buy">
                        <span className="show__brand">{sneaker.brand}</span>
                        <h1 className="show__name">{sneaker.name}</h1>
                        {sneaker.colorway && (
                            <p className="show__sub">{sneaker.colorway}</p>
                        )}

                        <div className="ask-card">
                            <span className="ask-card__label">Lowest Ask</span>
                            <span className="ask-card__price">
                                {lowestPrice !== null ? formatPrice(lowestPrice) : 'No listings'}
                            </span>
                        </div>

                        <div className="size-grid">
                            <div className="size-grid__head">
                                <h3 className="size-grid__title">Available sizes</h3>
                                <span className="size-grid__count">
                                    {sortedListings.length} listing{sortedListings.length === 1 ? '' : 's'}
                                </span>
                            </div>

                            {sortedListings.length > 0 ? (
                                <ul className="size-grid__list">
                                    {sortedListings.map((listing) => (
                                        <li key={listing.id}>
                                            <Link
                                                to={`/sneakers/${sneaker.id}/listings/${listing.id}`}
                                                className="size-btn"
                                            >
                                                <span className="size-btn__size">US {listing.size}</span>
                                                <span className="size-btn__price">{formatPrice(listing.price)}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="size-grid__empty">
                                    No listings available right now.
                                </p>
                            )}
                        </div>
                    </aside>
                </div>

                <section className="show__info">
                    <div className="show__description">
                        <h2 className="show__section-title">Product Details</h2>
                        <p>{sneaker.description}</p>
                    </div>
                    <SneakerDetails sneaker={sneaker} />
                </section>

                <section className="show__reviews">
                    <h2 className="show__section-title">Reviews</h2>
                    <ReviewFormContainer
                        sneaker={sneaker}
                        currentUser={currentUser}
                        reviews={reviews}
                    />
                </section>
            </div>
        );
    }
}

export default SneakerShow;
