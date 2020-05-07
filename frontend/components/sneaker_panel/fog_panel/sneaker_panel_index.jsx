import React from 'react';
import { Link } from 'react-router-dom'
import SneakerPanelIndexItem from './sneaker_panel_index_item'

class SneakerPanelIndex3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { sneakers } = this.props;
        return (
        <div className="sneaker-panel">
            <h1 className="thelastdance">FEAR OF GOD COLLECTION</h1>
                <div className="sneaker-panel-items">
                        {sneakers.map(sneaker => <SneakerPanelIndexItem key={sneaker.id} sneaker={sneaker} />)}
                </div>      
        </div>
        )
    }
};

export default SneakerPanelIndex3;