import React from 'react';
import { Link } from 'react-router-dom'
import SneakerPanelIndexItem from './sneaker_panel_index_item'

class SneakerPanelIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { sneakers } = this.props;
        // debugger
        return (
        <div className="sneaker-panel">
            <h1 className="thelastdance">The Last Dance</h1>
            <div className="sneaker-panel-items">
                    {sneakers.map(sneaker => <SneakerPanelIndexItem sneaker={sneaker} />)}
            </div>      
        </div>
        )
    }
};

export default SneakerPanelIndex;