import React from 'react';
// import SneakerIndex from './sneakers_index/'

const SneakerItemIndex = ({ sneaker }) => {
    return (
        <div>
            <img src={window.bred11s}></img>
                {sneaker.name}
        </div>
    )
}

export default SneakerItemIndex