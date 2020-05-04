import React from 'react';
import { Route } from 'react-router-dom';
import SneakerShowContainer from './sneaker_show_container'
import SneakerDetails from './sneaker_details'
import { Link } from 'react-router-dom';

class SneakerShow extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchSneaker(this.props.match.params.sneakerId)
        window.scrollTo(0,0);
    };
    
    render () {
        const { sneaker, listings } = this.props;
        if (!sneaker) return null;
        // if (!listings) return null;
        return (
            <div className='outer-sneakerComponent'>
                <div className='sneakerComponent'>

                    <div className='leftShoe-pane'>
                        <img className='shoePane-img' src={sneaker.photoUrl}></img>
                        <span className='sneaker-footer'>{sneaker.brand} / {sneaker.silhouette} / {sneaker.name}</span>
                    </div>

                    <div className='rightShoe-pane'>
                        <h1>{sneaker.name}</h1>
                        <br/>
                        <p>SKU: {sneaker.sku}</p>  
                        <Link to={`/sneakers/${sneaker.id}/listings`}>Buy New</Link> 
                    </div>
                </div>
                    <div className='product-details'>
                        <h1>Product Details</h1>
                        <br/>
                        {sneaker.description}
                    </div>

                    <SneakerDetails sneaker={sneaker}/>
            </div>
            
        ) 
    };
}

export default SneakerShow;