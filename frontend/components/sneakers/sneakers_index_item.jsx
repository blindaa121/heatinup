import React from 'react';
// import SneakerIndex from './sneakers_index/'
import { Link } from 'react-router-dom';

const SneakerItemIndex = ({ sneaker, search }) => {

    if (search !== "" && sneaker.name.toLowerCase().indexOf(search.toLowerCase()) === -1) {
        return null;
    }

    return (
        <div className='sneakerItem'>
            <a href={`#/sneakers/${sneaker.id}`}><img src={sneaker.photoUrl}/></a>
            <span>{sneaker.brand}</span>
            <Link className='sneakerLink' to={`/sneakers/${sneaker.id}`}>{sneaker.name}</Link>
        </div>
    )
}

export default SneakerItemIndex