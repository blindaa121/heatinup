import React from 'react';
import { Link } from 'react-router-dom'
import SneakerPanelIndexItem from './sneaker_panel_index_item'

class SneakerPanelIndex2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { sneakers } = this.props;
        return (
        <div className="sneaker-panel">
            
            <div className="sneaker-panel-header">
                <h1 className="thelastdance">OFF WHITE COLLECTION</h1>
                <Link to="/collections/offwhite" className='see-all'>See All</Link>
            </div>

            <div className="sneaker-panel-items">
                    {sneakers.map(sneaker => <SneakerPanelIndexItem key={sneaker.id} sneaker={sneaker} />)}
            </div>    
                  
        </div>
        )
    }
};

export default SneakerPanelIndex2;