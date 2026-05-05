import React from 'react';

const formatPrice = (price) => {
    if (price === null || price === undefined) return null;
    return `$${Number(price).toLocaleString()}`;
};

const SneakerItemIndex = ({ sneaker }) => {
    const price = formatPrice(sneaker.minPrice);

    return (
        <a className="sneaker-card" href={`#/sneakers/${sneaker.id}`}>
            <div className="sneaker-card__media">
                {sneaker.photoUrl
                    ? <img src={sneaker.photoUrl} alt={sneaker.name} />
                    : <div className="sneaker-card__placeholder" />}
            </div>
            <div className="sneaker-card__meta">
                <span className="sneaker-card__brand">{sneaker.brand}</span>
                <span className="sneaker-card__name">{sneaker.name}</span>
                <span className="sneaker-card__price">
                    {price ? `Lowest Ask  ${price}` : 'No listings'}
                </span>
            </div>
        </a>
    );
};

export default SneakerItemIndex;
