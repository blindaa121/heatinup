import React from 'react';
// import SneakerIndex from './sneakers_index/'

const SneakerItemIndex = ({ sneaker }) => {
    return (
        <div>
            <img src={sneaker.photoUrl}></img>
                {sneaker.name}
        </div>
    )
}

export default SneakerItemIndex