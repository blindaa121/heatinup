import React from 'react';

const FIELDS = [
    { label: 'Release Date', key: 'releaseDate' },
    { label: 'SKU', key: 'sku' },
    { label: 'Brand', key: 'brand' },
    { label: 'Silhouette', key: 'silhouette' },
    { label: 'Designer', key: 'designer' },
    { label: 'Upper Material', key: 'upperMaterial' },
    { label: 'Main Color', key: 'mainColor' },
    { label: 'Colorway', key: 'colorway' },
    { label: 'Technology', key: 'technology' },
    { label: 'Category', key: 'category' },
];

const SneakerDetails = ({ sneaker }) => (
    <dl className="spec-grid">
        {FIELDS.map(({ label, key }) => (
            sneaker[key] ? (
                <div className="spec-grid__row" key={key}>
                    <dt className="spec-grid__label">{label}</dt>
                    <dd className="spec-grid__value">{sneaker[key]}</dd>
                </div>
            ) : null
        ))}
    </dl>
);

export default SneakerDetails;
