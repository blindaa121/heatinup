import React from 'react';
import SneakerShowContainer from './sneaker_show_container'
import SneakerDetails from './sneaker_details'

class SneakerShow extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        // debugger
        this.props.fetchSneaker(this.props.match.params.sneakerId)
    };
    
    render () {
        const { sneaker } = this.props;
        if (!sneaker) return null;
        // debugger
        return (
            <div className='outer-sneakerComponent'>
                <div className='sneakerComponent'>

                    <div className='leftShoe-pane'>
                        <img src={window.bred4s}></img>
                        <br/>
                        <p id='sneaker-brand'>{sneaker.brand}</p>
                    </div>

                    <div className='rightShoe-pane'>
                        <h1>{sneaker.name}</h1>
                        <br/>
                        <p>SKU: {sneaker.sku}</p>   
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