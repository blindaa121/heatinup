import React from 'react';
// import SneakerIndex from './sneakers_index/'

const SneakerItemIndex = ({ sneaker }) => {
    return (
        <div>
            <img src={window.bred11s}/>
            {sneaker.name}
        </div>
    )
}

export default SneakerItemIndex