import React from 'react';
import SneakerIndexItem from './sneakers_index_item';

class SneakerIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSneakers();
        window.scrollTo(0, 0);
    }

    render () {

        const { sneakers } = this.props;
        if (!sneakers) return null;

        return (
            <div className="outerSneakerdiv">
                <span className="collection-header">The Last Dance - Air Jordan</span>
                <p className="collection-description">The Last Dance documentary focuses on Michael Jordan and the Chicago Bulls as they strive for their sixth NBA Championship. To mark the retrospective of one of the greatest basketball players of all time, we take an in-depth look at the legacy of Air Jordans that MJ donned during these defining moments.</p>
                <div className='show-all'>
                    {sneakers.map(sneaker => <SneakerIndexItem key={sneaker.id} sneaker={sneaker} />)} 
                </div>
            </div>
        )
    }
}

export default SneakerIndex