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
            <h1 className="TheLastDance">The Last Dance</h1>
                <div>
                    <SneakerPanelIndexItem sneakers={sneakers} />
                    {/* <Link to="/sneakers/1">SNEAKER 1</Link>
                    <Link to="/sneakers/2">SNEAKER 2</Link>
                    <Link to="/sneakers/3">SNEAKER 3</Link>
                    <Link to="/sneakers/4">SNEAKER 4</Link>
                    <Link to="/sneakers/5">SNEAKER 5</Link> */}
                </div>      
        </div>
        )
    }
};

export default SneakerPanelIndex;