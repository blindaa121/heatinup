import React from 'react';
import { Route } from 'react-router-dom';
import SneakerShowContainer from './sneaker_show_container';
import SneakerDetails from './sneaker_details';
import ListingIndexContainer from '../listings/listing_container'
import { Link } from 'react-router-dom';

class SneakerShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showListings: false
        }

        this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount() {
        this.props.fetchSneaker(this.props.match.params.sneakerId)
        window.scrollTo(0,0);
    };

    handleClick() {
        this.setState({showListings: true})
    }
    
    render () {
        const { sneaker, listings } = this.props;
        // debugger
        if (!sneaker) return null;
        if (!listings) return null;
        return (
            <div className='outer-sneakerComponent'>
                <div className='sneakerComponent'>

                    <div className='leftShoe-pane'>
                        <img className='shoePane-img' src={sneaker.photoUrl}></img>
                        <span className='sneaker-footer'>{sneaker.brand} / {sneaker.silhouette} / {sneaker.name}</span>
                    </div>

                    <div className='rightShoe-pane'>
                            {
                            this.state.showListings ? <ListingIndexContainer/> : 
                                (
                                    <div>
                                        <h1>{sneaker.name}</h1>
                                        <br/>
                                        <p>SKU: {sneaker.sku}</p>
                                    </div>
                                )
                            }
                            <button onClick={() => this.handleClick()} className='buy-new-btn'>Buy New</button>
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