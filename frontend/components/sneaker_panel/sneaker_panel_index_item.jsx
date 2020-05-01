import React from 'react';
import { Link } from 'react-router-dom'
const SneakerPanelIndexItem  = ({ sneaker }) => {
    return (
        <div className="sneakerpanel-item">
            <a href={`#/sneakers/${sneaker.id}`}><img id="sneaker-img"src={window.panelitemImg}></img></a>
            <br/>
            <Link id="sneakerName" to={`/sneakers/${sneaker.id}`}>{sneaker.name}</Link>
        </div>
    )
}

export default SneakerPanelIndexItem