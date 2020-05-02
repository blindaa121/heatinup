import React from 'react'
import SneakerShow from './sneaker_show'

const SneakerDetails = ({ sneaker }) => {
    return (
        <div className='sneaker-details'>
            <div id='releaseDate'>
                <p>Release Date</p>
                <br />
                {sneaker.releaseDate}
            </div>
            <div id='sku'>
                <p>SKU</p>
                <br />
                {sneaker.sku}
            </div>
            <div id='brand'>
                <p>Brand</p>
                <br />
                {sneaker.brand}
            </div>
            <div id='upper-material'>
                <p>Upper Material</p>
                <br />
                {sneaker.upperMaterial}
            </div>
            <div id='main-color'>
                <p>Main Color</p>
                <br />
                {sneaker.mainColor}
            </div>
            <div id='colorway'>
                <p>Colorway</p>
                <br />
                {sneaker.colorway}
            </div>
            <div id='designer'>
                <p>Designer</p>
                <br />
                {sneaker.designer}
            </div>
            <div id='silhouette'>
                <p>Silhouette</p>
                <br />
                {sneaker.silhouette}
            </div>
            <div id='technology'>
                <p>Technology</p>
                <br />
                {sneaker.technology}
            </div>
            <div id='category'>
                <p>Category</p>
                <br />
                {sneaker.category}
            </div>
        </div>
    )
}

export default SneakerDetails