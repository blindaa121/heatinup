import React from 'react';
import { Link } from 'react-router-dom'
const SneakerPanelIndexItem  = ({ sneaker }) => {
    return (
        <div>
            <div className="sneakerpanel-item">
                <a href={`#/sneakers/${sneaker.id}`}><img id="sneaker-img"src={sneaker.photoUrl}></img></a>
                <br/>
            </div>
            {/* <Link id="sneakerName" to={`/sneakers/${sneaker.id}`}>{sneaker.name}</Link> */}
        </div>
        
    )
}

export default SneakerPanelIndexItem