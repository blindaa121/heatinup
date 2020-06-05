import React from 'react';
import SneakerIndexItem from './sneakers_index_item';

class SneakerIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    componentDidMount() {
        this.props.fetchSneakers()
    }

    render () {

        const { sneakers } = this.props;
        if (!sneakers) return null;

        return (
            <div className="outerSneakerdiv">
                <h1>Shop All</h1>
                <div className='show-all'>
                    {sneakers.map(sneaker => <SneakerIndexItem key={sneaker.id} sneaker={sneaker} />)} 
                </div>
            </div>
        )
    }
}

export default SneakerIndex