import React from 'react';
// import SneakerIndex from './sneakers_index/'
import { Link } from 'react-router-dom';

const SneakerItemIndex = ({ sneaker }) => {
    return (
        <div className='sneakerItem'>
            <img src={sneaker.photoUrl}></img>
            <Link to={`/sneakers/${sneaker.id}`}>{sneaker.name}</Link>
        </div>
    )
}

export default SneakerItemIndex