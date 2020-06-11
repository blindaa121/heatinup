import React from 'react';
import { Link } from 'react-router-dom'
import SneakerPanelIndexItem from './sneaker_panel_index_item'
import { fetchSneakers } from '../../../actions/sneakers_actions';

class SneakerPanelIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSneakers();
    }

    render () {
        const { sneakers, randomSneakers } = this.props;
        return (
        <div className="sneaker-panel">

            <div className="sneaker-panel-header random-panel">
                <h1 className="thelastdance">YOU MAY ALSO LIKE</h1>
                <Link to="/sneakers" className='see-all'>Shop All</Link>
            </div>

            <div className="sneaker-panel-items">
                {randomSneakers.map(sneaker => <SneakerPanelIndexItem key={sneaker.id} sneaker={sneaker} />)}
            </div>  

        </div>
        )
    }
};

export default SneakerPanelIndex;