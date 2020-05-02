import React from 'react'
import SneakerShow from './sneaker_show'

const SneakerDetails = ({ sneaker }) => {
    return (
        <div className='sneaker-details'>
            <div id='releaseDate'>
                Release Date
                <br />
                {sneaker.releaseDate}
            </div>
            <div id='sku'>
                SKU
                <br />
                {sneaker.sku}
            </div>
            <div id='brand'>
                Brand
                <br />
                {sneaker.brand}
            </div>
            <div id='upper-material'>
                Upper Material
                <br />
                {sneaker.upperMaterial}
            </div>
            <div id='main-color'>
                Main Color
                <br />
                {sneaker.mainColor}
            </div>
            <div id='colorway'>
                Colorway
                <br />
                {sneaker.colorway}
            </div>
            <div id='designer'>
                Designer
                <br />
                {sneaker.designer}
            </div>
            <div id='silhouette'>
                Silhouette
                <br />
                {sneaker.silhouette}
            </div>
            <div id='technology'>
                Technology
                <br />
                {sneaker.technology}
            </div>
            <div id='category'>
                Category
                <br />
                {sneaker.category}
            </div>
        </div>
    )
}

export default SneakerDetails